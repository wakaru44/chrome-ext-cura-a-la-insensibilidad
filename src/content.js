replacements = [
    {'find': 'Refugiado',        'replace': 'Perrito'},
    {'find': 'REFUGIADO',        'replace': 'PERRITO'},
    {'find': 'refugiado',        'replace': 'perrito'},

    {'find': 'Refugiados',       'replace': 'Perritos'},
    {'find': 'REFUGIADOS',       'replace': 'PERRITOS'},
    {'find': 'refugiados',       'replace': 'perritos'},

    {'find': 'Europa',           'replace': 'tu casa'}
];

replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});
