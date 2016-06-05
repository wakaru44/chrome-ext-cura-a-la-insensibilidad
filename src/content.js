replacements = [
    {'find': 'Refugiado',        'replace': 'Perrito'},
    {'find': 'REFUGIADO',        'replace': 'PERRITO'},
    {'find': 'refugiado',        'replace': 'perrito'},

    {'find': 'Refugiados',       'replace': 'Perritos'},
    {'find': 'REFUGIADOS',       'replace': 'PERRITOS'},
    {'find': 'refugiados',       'replace': 'perritos'},

    {'find': 'desplazad',       'replace': 'cachorrit'},
    {'find': 'Desplazad',       'replace': 'Cachorrit'},
    {'find': 'DESPLAZAD',       'replace': 'CACHORRIT'},

    {'find': 'naufrag',       'replace': 'gatit'},
    {'find': 'Naufrag',       'replace': 'Gatit'},
    {'find': 'NAUFRAG',       'replace': 'GATIT'},

    {'find': 'Europa',           'replace': 'tu casa'}
];

replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});
