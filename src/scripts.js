window.addEventListener('load', function () {
  document.getElementById('rocket').style.top = 250 + 'px';
  let up = document.getElementById('Up');
  let down = document.getElementById('Down');
  let left = document.getElementById('Left');
  let right = document.getElementById('Right');
  let takeOff = document.getElementById('takeoff');
  let landing = document.getElementById('landing');
  let missionAbort = document.getElementById('missionAbort');

  takeOff.addEventListener('click', function (event) {
    const booleanValue = window.confirm(
      'Confirm that the shuttle is ready for takeoff.'
    );

    if (booleanValue) {
      document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
      document.getElementById('shuttleBackground').style.backgroundColor =
        'blue';
      document.getElementById('spaceShuttleHeight').innerHTML = '10000';
      
      document.getElementById('rocket').style.top = 240 + 'px';
    }
  });

  landing.addEventListener('click', function (event) {
    window.confirm('The shuttle is landing. Landing gear engaged.');
    document.getElementById('flightStatus').innerHTML =
      'The shuttle has landed.';
    document.getElementById('shuttleBackground').style.backgroundColor =
      'green';
    document.getElementById('spaceShuttleHeight').innerHTML = '0';
    document.getElementById('rocket').style.top = 250 + 'px';
    document.getElementById('rocket').style.left = 0 + 'px'
  });

  missionAbort.addEventListener('click', function (event) {
    const booleanValue = window.confirm(
      'Confirm that you want to abort the mission.'
    );

    if (booleanValue) {
      document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
      document.getElementById('shuttleBackground').style.backgroundColor =
        'green';
      document.getElementById('spaceShuttleHeight').innerHTML = '0';
      document.getElementById('rocket').style.top = 250 + 'px';
      document.getElementById('rocket').style.left = 0 + 'px';
    }
  });

  up.addEventListener('click', function (event) {
    let littleBox = document.getElementById('rocket');
    let lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue('top').replace('px', '');

    if (topValue > 0) {
      littleBox.style.top = Number(topValue) - 10 + 'px';
      document.getElementById('spaceShuttleHeight').innerHTML =
        Number(document.getElementById('spaceShuttleHeight').innerHTML) + 10000;
    }
  });

  down.addEventListener('click', function (event) {
    let littleBox = document.getElementById('rocket');
    let lbStyle = window.getComputedStyle(littleBox);
    topValue = lbStyle.getPropertyValue('top').replace('px', '');

    if (topValue < 250) {
      littleBox.style.top = Number(topValue) + 10 + 'px';
      document.getElementById('spaceShuttleHeight').innerHTML =
        Number(document.getElementById('spaceShuttleHeight').innerHTML) - 10000;
    }
  });

  left.addEventListener('click', function (event) {
    let littleBox = document.getElementById('rocket');
    let lbStyle = window.getComputedStyle(littleBox);
    leftValue = lbStyle.getPropertyValue('left').replace('px', '');
    if (leftValue * -1 + 30 < littleBox.offsetWidth / 2) {
      littleBox.style.left = Number(leftValue) - 10 + 'px';
    }
  });

  right.addEventListener('click', function (event) {
    let littleBox = document.getElementById('rocket');
    let lbStyle = window.getComputedStyle(littleBox);
    leftValue = lbStyle.getPropertyValue('left').replace('px', '');

    if (Number(leftValue) + 30 < littleBox.offsetWidth / 2) {
      littleBox.style.left = Number(leftValue) + 10 + 'px';
    }
  });
});
