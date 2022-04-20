!(function () {
  const t = {
    354(t) {
      t.exports = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADWUlEQVRYhc3YS2tdVRQH8F9UrGBy05EoSHykRq0N6SNSEEEnioiv0kGQggMHQkfiQAitDmxTEK0d+PgG+gVEihgTFKTEF7Q2aVEEW8GRtvQhmgyadLD2pTf3ce45555b+ofL4e699lr/vddjP7jBMVCBjo0YwwgGU9u/+BO/4UIFNgpjB45gEatY6/BbxUkcxvYyhoqs4ABewj5MJgIn8W0iehYXk+ww7sUjeBJb0vgfcAiflyGbhTHMJ1L/4ADuLzB+FAdxLumYxaaqyO3BZSwnYoPZ4pkYxEzSdQlTvZLbL+JoSbirKozjVNI9XVbJW8Id86hVw2sdBvFlslGY5B4xu1lsqJbXOmzAXLKV291jIuaW9BZveVHDaVEBRrsJDwiXLqs25rphHCv4qpvgLhETB/rNqA0OJdvPZQn9KOrc7X0gcJNIis869A+JOrnQScEO/V29N5L+/RkyM0lmW7vOIyKbiuwQefEQ/sNPuCVD7oHE4f12nYs4UTm1ILQgEm9LDvlFHG9u3CiYf1gptcA+4bY3c8p/nLis2xx2JiWvVUotStX/OIabc47Zm7hMEpkFd6fvmRwK7pMvy2/Fp7iCV9I3D/5I35FGgkPpezmHgp/FitzZRe5tbBX77O85yXHtTDnUSLAIXsdmfCdWsx0eTcTm8EkJGy3YLfz+dE75F0Vs/aU1M28T+/hF3FOCyzOJy67GxjJJ8kQicR6PNbQfTrpeLUGOpiSpo15mPiqobBJ/i9h9Co+LZPiiJDkiJFrKDPySfkXxsLhiLguXn8NdPRBc0qZQwweCedczWRuM4FfhmpdLU4uz6Brea9e5PXUeLKn8DrxTcmwd9SPX1k4C3wsXXY+TdDNqIuGOZQm9IGYwcz0YNeHdZPvZboKzIuDH+82oARPiyH80j/Amcak+pT/XzWYMiwS7oPPO1IIpkdFf6/+1cz7Z2l108LSIiTn9Wclh19578p4VWzAtZndatTE5Idy6qgdydUyJmFwRdWooWzwTNZGtKyLmCru1E0bFpXpN1MkZccHJizExufNJx1E5E6LoE/Dz4tq4M/1fwjfionNG6wPmuHjA3JzaF8ROlauc9IJt4mp4Qvcn4ONib50oY6iKR/QaHtT6iH5WPKJfqsDGjYurIzDScITvZJUAAAAASUVORK5CYII=';
    },
    169(t, e, r) {
      t.exports = `${r.p}image/xph.gif`;
    },
  };
  const e = {};
  function r(n) {
    const o = e[n];
    if (void 0 !== o) return o.exports;
    const i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = function (t) {
    const e = t && t.__esModule
      ? function () {
        return t.default;
      }
      : function () {
        return t;
      };
    return r.d(e, { a: e }), e;
  }),
  (r.d = function (t, e) {
    for (const n in e) {
      r.o(e, n)
          && !r.o(t, n)
          && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }
  }),
  (r.g = (function () {
    if (typeof globalThis === 'object') return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if (typeof window === 'object') return window;
    }
  }())),
  (r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (function () {
    let t;
    r.g.importScripts && (t = `${r.g.location}`);
    const e = r.g.document;
    if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
      const n = e.getElementsByTagName('script');
      n.length && (t = n[n.length - 1].src);
    }
    if (!t) {
      throw new Error(
        'Automatic publicPath is not supported in this browser',
      );
    }
    (t = t
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/')),
    (r.p = t);
  }()),
  (function () {
    const t = r(169);
    const e = r.n(t);
    const n = r(354);
    const o = r.n(n);
    const i = new Image();
    i.src = e();
    const c = new Image();
    (c.src = o()), document.body.append(i), document.body.append(c);
  }());
}());
