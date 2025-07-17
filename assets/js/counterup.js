const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
  
    const options = {
      threshold: [0, 0.9],
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          odometer.update(0);  
          odometer.update(value);  
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };
  
  // Select the odometer elements and extract their initial values
  const subscribersOdometer = document.querySelector(".happy-clients");
  const subscribersValue = parseInt(subscribersOdometer.innerText);
  
  const videosOdometer = document.querySelector(".working-hours");
  const videosValue = parseInt(videosOdometer.innerText);
  
  const projectsOdometer = document.querySelector(".award-won");
  const projectsValue = parseInt(projectsOdometer.innerText); 
  
  // Pass the initial values to the createOdometer function
  createOdometer(subscribersOdometer, subscribersValue);
  createOdometer(videosOdometer, videosValue);
  createOdometer(projectsOdometer, projectsValue); 