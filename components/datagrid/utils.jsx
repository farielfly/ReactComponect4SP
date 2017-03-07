function on(target, eventName, listener, capture = false) {
    const bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
    const unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
    const eventPrefix = bind !== 'addEventListener' ? 'on' : '';

    target[bind](eventPrefix + eventName, listener, capture);
    return {
        off() {
            target[unbind](eventPrefix + eventName, listener, capture);
        }
    };
};

function getWindow(node) {
    return node === node.window ?
        node : node.nodeType === 9 ?
        node.defaultView || node.parentWindow : false;
}

function scrollTop(node, val) {
    let win = getWindow(node);
    let top = win ? (('pageYOffset' in win) ? win.pageYOffset : win.document.documentElement.scrollTop) : node.scrollTop;
    let left = win ? (('pageXOffset' in win) ? win.pageXOffset : win.document.documentElement.scrollLeft) : 0;

    if (val === undefined) {
        return top;
    }

    win ? win.scrollTo(left, val) : node.scrollTop = val;
}

function scrollLeft(node, val) {

    let win = getWindow(node);
    let left = win ? (('pageXOffset' in win) ? win.pageXOffset : win.document.documentElement.scrollLeft) : node.scrollLeft;
    let top = win ? (('pageYOffset' in win) ? win.pageYOffset : win.document.documentElement.scrollTop) : 0;

    if (val === undefined) {
        return left;
    }

    win ? win.scrollTo(val, top) : node.scrollLeft = val;
}

function hyphenate(string) {
    return string.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function hyphenateStyleName(string) {
    return hyphenate(string).replace('/^ms-/', '-ms-');
};

function removeStyle(node, key) {
    return ('removeProperty' in node.style) ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};

function addStyle(node, property, value) {
    let css = '';
    let props = property;

    if (typeof property === 'string') {
        if (value === undefined) {
            new Error('value is undefined');
        }
        (props = {})[property] = value;
    }

    for (var key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            !props[key] && props[key] !== 0 ?
                removeStyle(node, hyphenateStyleName(key))
                : (css += hyphenateStyleName(key) + ':' + props[key] + ';');
        }
    }

    node.style.cssText += ';' + css;
};

function addClass(target, className) {
    if (className) {
        if (target.classList) {
            target.classList.add(className);
        } else if (!hasClass(className, target)) {
            target.className = target.className + ' ' + className;
        }
    }
    return target;
};

function hasClass(target, className) {
    if (target.classList) {
        return !!className && target.classList.contains(className);
    }
    return ` ${target.className} `.indexOf(` ${className} `) !== -1;
};

function removeClass(target, className) {
    if (className) {
        if (target.classList) {
            target.classList.remove(className);
        } else {
            target.className = target.className
                .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
                .replace(/\s+/g, ' ') // multiple spaces to one
                .replace(/^\s*|\s*$/g, ''); // trim the ends
        }
    }
    return target;
};

function toggleClass(target, className) {
    if (hasClass(target, className)) {
        return removeClass(target, className);
    }
    return addClass(target, className);
};

module.exports ={
on, scrollLeft, scrollTop, addStyle, addClass, removeClass, toggleClass
}
