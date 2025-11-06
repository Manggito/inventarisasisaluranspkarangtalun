var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_2 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAI_4 = new ol.format.GeoJSON();
var features_SUNGAI_4 = format_SUNGAI_4.readFeatures(json_SUNGAI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_4.addFeatures(features_SUNGAI_4);
var lyr_SUNGAI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_4, 
                style: style_SUNGAI_4,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_4.png" /> SUNGAI'
            });
var format_JALAN_5 = new ol.format.GeoJSON();
var features_JALAN_5 = format_JALAN_5.readFeatures(json_JALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_5.addFeatures(features_JALAN_5);
var lyr_JALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_5, 
                style: style_JALAN_5,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_5.png" /> JALAN'
            });
var format_AREAFUNGSIONAL_6 = new ol.format.GeoJSON();
var features_AREAFUNGSIONAL_6 = format_AREAFUNGSIONAL_6.readFeatures(json_AREAFUNGSIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAFUNGSIONAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAFUNGSIONAL_6.addFeatures(features_AREAFUNGSIONAL_6);
var lyr_AREAFUNGSIONAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAFUNGSIONAL_6, 
                style: style_AREAFUNGSIONAL_6,
                popuplayertitle: 'AREA FUNGSIONAL',
                interactive: true,
                title: '<img src="styles/legend/AREAFUNGSIONAL_6.png" /> AREA FUNGSIONAL'
            });
var format_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGAN_KERUSAKAN_SALURAN_7 = format_KETERANGAN_KERUSAKAN_SALURAN_7.readFeatures(json_KETERANGAN_KERUSAKAN_SALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7.addFeatures(features_KETERANGAN_KERUSAKAN_SALURAN_7);
var lyr_KETERANGAN_KERUSAKAN_SALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGAN_KERUSAKAN_SALURAN_7, 
                style: style_KETERANGAN_KERUSAKAN_SALURAN_7,
                popuplayertitle: 'KETERANGAN_KERUSAKAN_SALURAN',
                interactive: true,
    title: 'KETERANGAN_KERUSAKAN_SALURAN<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGAN_KERUSAKAN_SALURAN_7_3.png" /> Rusak Berat<br />' });
var format_JENIS_SALURAN_8 = new ol.format.GeoJSON();
var features_JENIS_SALURAN_8 = format_JENIS_SALURAN_8.readFeatures(json_JENIS_SALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENIS_SALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENIS_SALURAN_8.addFeatures(features_JENIS_SALURAN_8);
var lyr_JENIS_SALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENIS_SALURAN_8, 
                style: style_JENIS_SALURAN_8,
                popuplayertitle: 'JENIS_SALURAN',
                interactive: true,
    title: 'JENIS_SALURAN<br />\
    <img src="styles/legend/JENIS_SALURAN_8_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENIS_SALURAN_8_1.png" /> Saluran Sekunder<br />' });
var format_AREANOMENKLATUR_9 = new ol.format.GeoJSON();
var features_AREANOMENKLATUR_9 = format_AREANOMENKLATUR_9.readFeatures(json_AREANOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREANOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREANOMENKLATUR_9.addFeatures(features_AREANOMENKLATUR_9);
var lyr_AREANOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREANOMENKLATUR_9, 
                style: style_AREANOMENKLATUR_9,
                popuplayertitle: 'AREA NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREANOMENKLATUR_9.png" /> AREA NOMENKLATUR'
            });
var format_BANGUNANMERGE_10 = new ol.format.GeoJSON();
var features_BANGUNANMERGE_10 = format_BANGUNANMERGE_10.readFeatures(json_BANGUNANMERGE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANMERGE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANMERGE_10.addFeatures(features_BANGUNANMERGE_10);
var lyr_BANGUNANMERGE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANMERGE_10, 
                style: style_BANGUNANMERGE_10,
                popuplayertitle: 'BANGUNAN MERGE',
                interactive: false,
                title: '<img src="styles/legend/BANGUNANMERGE_10.png" /> BANGUNAN MERGE'
            });
var format_Tikungan_11 = new ol.format.GeoJSON();
var features_Tikungan_11 = format_Tikungan_11.readFeatures(json_Tikungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_11.addFeatures(features_Tikungan_11);
var lyr_Tikungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_11, 
                style: style_Tikungan_11,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_11.png" /> Tikungan'
            });
var format_BedaPasangan_12 = new ol.format.GeoJSON();
var features_BedaPasangan_12 = format_BedaPasangan_12.readFeatures(json_BedaPasangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BedaPasangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BedaPasangan_12.addFeatures(features_BedaPasangan_12);
var lyr_BedaPasangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BedaPasangan_12, 
                style: style_BedaPasangan_12,
                popuplayertitle: 'Beda Pasangan',
                interactive: true,
                title: '<img src="styles/legend/BedaPasangan_12.png" /> Beda Pasangan'
            });
var format_GorongGorong_13 = new ol.format.GeoJSON();
var features_GorongGorong_13 = format_GorongGorong_13.readFeatures(json_GorongGorong_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GorongGorong_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GorongGorong_13.addFeatures(features_GorongGorong_13);
var lyr_GorongGorong_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GorongGorong_13, 
                style: style_GorongGorong_13,
                popuplayertitle: 'Gorong - Gorong',
                interactive: true,
                title: '<img src="styles/legend/GorongGorong_13.png" /> Gorong - Gorong'
            });
var format_TitikPer50m_14 = new ol.format.GeoJSON();
var features_TitikPer50m_14 = format_TitikPer50m_14.readFeatures(json_TitikPer50m_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPer50m_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPer50m_14.addFeatures(features_TitikPer50m_14);
var lyr_TitikPer50m_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPer50m_14, 
                style: style_TitikPer50m_14,
                popuplayertitle: 'Titik Per 50 m',
                interactive: true,
                title: '<img src="styles/legend/TitikPer50m_14.png" /> Titik Per 50 m'
            });
var format_BangunanAir_15 = new ol.format.GeoJSON();
var features_BangunanAir_15 = format_BangunanAir_15.readFeatures(json_BangunanAir_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanAir_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanAir_15.addFeatures(features_BangunanAir_15);
var lyr_BangunanAir_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanAir_15, 
                style: style_BangunanAir_15,
                popuplayertitle: 'Bangunan Air',
                interactive: true,
                title: '<img src="styles/legend/BangunanAir_15.png" /> Bangunan Air'
            });
var format_BangunanBagi_16 = new ol.format.GeoJSON();
var features_BangunanBagi_16 = format_BangunanBagi_16.readFeatures(json_BangunanBagi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanBagi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanBagi_16.addFeatures(features_BangunanBagi_16);
var lyr_BangunanBagi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanBagi_16, 
                style: style_BangunanBagi_16,
                popuplayertitle: 'Bangunan Bagi',
                interactive: true,
                title: '<img src="styles/legend/BangunanBagi_16.png" /> Bangunan Bagi'
            });
var format_BangunanSadap_17 = new ol.format.GeoJSON();
var features_BangunanSadap_17 = format_BangunanSadap_17.readFeatures(json_BangunanSadap_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanSadap_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanSadap_17.addFeatures(features_BangunanSadap_17);
var lyr_BangunanSadap_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanSadap_17, 
                style: style_BangunanSadap_17,
                popuplayertitle: 'Bangunan Sadap',
                interactive: true,
                title: '<img src="styles/legend/BangunanSadap_17.png" /> Bangunan Sadap'
            });
var format_RumahPompa_18 = new ol.format.GeoJSON();
var features_RumahPompa_18 = format_RumahPompa_18.readFeatures(json_RumahPompa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahPompa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahPompa_18.addFeatures(features_RumahPompa_18);
var lyr_RumahPompa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahPompa_18, 
                style: style_RumahPompa_18,
                popuplayertitle: 'Rumah Pompa',
                interactive: true,
                title: '<img src="styles/legend/RumahPompa_18.png" /> Rumah Pompa'
            });
var group_TITIKAKSSESORIS = new ol.layer.Group({
                                layers: [lyr_BangunanAir_15,lyr_BangunanBagi_16,lyr_BangunanSadap_17,lyr_RumahPompa_18,],
                                fold: 'open',
                                title: 'TITIK AKSSESORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_11,lyr_BedaPasangan_12,lyr_GorongGorong_13,lyr_TitikPer50m_14,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREANOMENKLATUR_9,lyr_BANGUNANMERGE_10,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoads_2.setVisible(true);lyr_OpenTopoMap_3.setVisible(true);lyr_SUNGAI_4.setVisible(true);lyr_JALAN_5.setVisible(true);lyr_AREAFUNGSIONAL_6.setVisible(true);lyr_KETERANGAN_KERUSAKAN_SALURAN_7.setVisible(true);lyr_JENIS_SALURAN_8.setVisible(true);lyr_AREANOMENKLATUR_9.setVisible(true);lyr_BANGUNANMERGE_10.setVisible(true);lyr_Tikungan_11.setVisible(true);lyr_BedaPasangan_12.setVisible(true);lyr_GorongGorong_13.setVisible(true);lyr_TitikPer50m_14.setVisible(true);lyr_BangunanAir_15.setVisible(true);lyr_BangunanBagi_16.setVisible(true);lyr_BangunanSadap_17.setVisible(true);lyr_RumahPompa_18.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoads_2,lyr_OpenTopoMap_3,lyr_SUNGAI_4,lyr_JALAN_5,lyr_AREAFUNGSIONAL_6,lyr_KETERANGAN_KERUSAKAN_SALURAN_7,lyr_JENIS_SALURAN_8,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSSESORIS];
lyr_SUNGAI_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AREAFUNGSIONAL_6.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENIS_SALURAN_8.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_AREANOMENKLATUR_9.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', 'PEMBAGIAN': 'PEMBAGIAN', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', });
lyr_BANGUNANMERGE_10.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BedaPasangan_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_GorongGorong_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_TitikPer50m_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BangunanAir_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BangunanBagi_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_BangunanSadap_17.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_RumahPompa_18.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_SUNGAI_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AREAFUNGSIONAL_6.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENIS_SALURAN_8.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREANOMENKLATUR_9.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_BANGUNANMERGE_10.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_BedaPasangan_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_GorongGorong_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_TitikPer50m_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_BangunanAir_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_BangunanBagi_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_BangunanSadap_17.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_RumahPompa_18.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_SUNGAI_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AREAFUNGSIONAL_6.set('fieldLabels', {'Id': 'hidden field', 'AREA': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'hidden field', });
lyr_KETERANGAN_KERUSAKAN_SALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENIS_SALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'KETERANGAN': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_AREANOMENKLATUR_9.set('fieldLabels', {'Id': 'hidden field', 'AREA': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', });
lyr_BANGUNANMERGE_10.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BedaPasangan_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_GorongGorong_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_TitikPer50m_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BangunanAir_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BangunanBagi_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_BangunanSadap_17.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_RumahPompa_18.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_RumahPompa_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});