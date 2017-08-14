(function() {
  let $el = null;
  let mask = null;
  if (!$el) {
    $el = self.document.createElement('div');
    $el.style.position = 'fixed';
    $el.style.left = '50%';
    $el.style.top = '50%';
    $el.style.zIndex = 5;
    $el.style.padding = '10px';
    $el.style.color = '#fff';
    $el.style.borderRadius = '5px';
    $el.style.backgroundColor = 'rgba(40, 40, 40, .75)';
    $el.style.webkitTransform = 'translate(-50%, -50%)';
    $el.style.transform = 'translate(-50%, -50%)';
    $el.style.display = 'none';
    self.document.body.appendChild($el);
  }
  if (!mask) {
    mask = self.document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.left = 0;
    mask.style.top = 0;
    mask.style.right = 0;
    mask.style.bottom = 0;
    mask.style.zIndex = 4;
    mask.style.backgroundColor = 'rgba(0, 0, 0, .01)';
    mask.style.display = 'none';
    self.document.body.appendChild(mask);
  }
  self.toast = function(content, { callback, time = 2000 } = {}) {
    $el.innerHTML = content;
    $el.style.display = 'block';
    mask.style.display = 'block';
    self.setTimeout(() => {
      $el.style.display = 'none';
      mask.style.display = 'none';
      if (typeof callback === 'function') {
        callback();
      }
    }, time);
  }
  self.toastr = function(content, { callback, time = 600000000 } = {}) {
	    $el.innerHTML = content;
	    $el.style.display = 'block';
	    mask.style.display = 'block';
	    self.setTimeout(() => {
	      if (typeof callback === 'function') {
	        callback();
	      }
	    }, time);
  };
})();
