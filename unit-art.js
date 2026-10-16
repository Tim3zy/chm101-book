// Chalk sketches for the unit headers on the contents page: one per unit,
// drawn in the unit's colour. viewBox 0 0 600 180; keep the left ~200 px light.
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Thermodynamics: an energy orb with heat arrows rising, entropy arrow.
    reset(
      C(430, 95, 34) + C(430, 95, 52, 'a') +
      P('M400 40 q10 -14 0 -28', 'breathe') + P('M430 34 q-10 -14 0 -28', 'breathe') + P('M460 40 q10 -14 0 -28', 'breathe') +
      P('M520 150 L560 150 M545 135 L560 150 L545 165', 'a') +
      Tx(250, 60, 'ΔH = n·Cₚ·ΔT', 26) + Tx(250, 100, 'disorder ↑', 26, 'a')
    ),
  ];
})();
