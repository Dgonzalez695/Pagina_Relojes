import { Injectable } from '@angular/core';
import { productos } from '../interfaces/productos.interface';
import { categorias } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root',
})
export class RelojesService {
  private _relojes: productos[] = [
    {
      modelo: 'MT-505',
      nombre: 'CASIO',
      descripcion:
        ' Material de la caja / bisel: resin Banda de resina Resistencia al agua de 50 metros luz de fondo LED',
      precio: '190.900',
      categoria: 2,
    },
    {
      modelo: 'KI5N8W',
      nombre: 'T5',
      descripcion:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      precio: '978.310',
      categoria: 14,
    },
    {
      modelo: 'IES4TZ',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
      precio: '531.103',
      categoria: 3,
    },
    {
      modelo: 'SA4N66',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      precio: '828.528',
      categoria: 13,
    },
    {
      modelo: 'KSTFTG',
      nombre: 'KOSMO',
      descripcion:
        'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      precio: '474.193',
      categoria: 1,
    },
    {
      modelo: 'UMUNA3',
      nombre: 'TEMPUS',
      descripcion:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      precio: '408.492',
      categoria: 2,
    },
    {
      modelo: 'TK03OQ',
      nombre: 'CASIO',
      descripcion:
        'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      precio: '098.501',
      categoria: 8,
    },
    {
      modelo: 'X47CGY',
      nombre: 'YESS',
      descripcion:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
      precio: '852.274',
      categoria: 6,
    },
    {
      modelo: 'NHMUWY',
      nombre: 'G-FOX',
      descripcion: 'Pellentesque at nulla.',
      precio: '173.067',
      categoria: 3,
    },
    {
      modelo: 'XXRHLQ',
      nombre: 'YESS',
      descripcion:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
      precio: '700.505',
      categoria: 9,
    },
    {
      modelo: 'TNRUG8',
      nombre: 'TEMPUS',
      descripcion:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      precio: '150.815',
      categoria: 15,
    },
    {
      modelo: 'SYT8U9',
      nombre: 'KOSMO',
      descripcion:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      precio: '897.763',
      categoria: 3,
    },
    {
      modelo: 'MR253O',
      nombre: 'G-FOX',
      descripcion:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      precio: '137.874',
      categoria: 10,
    },
    {
      modelo: 'A5Q33M',
      nombre: 'YESS',
      descripcion: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      precio: '173.932',
      categoria: 13,
    },
    {
      modelo: 'FR73YP',
      nombre: 'KOSMO',
      descripcion:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      precio: '366.078',
      categoria: 11,
    },
    {
      modelo: 'K38P3P',
      nombre: 'TEMPUS',
      descripcion:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      precio: '489.937',
      categoria: 4,
    },
    {
      modelo: 'V9Q29Z',
      nombre: 'CASIO',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      precio: '203.965',
      categoria: 6,
    },
    {
      modelo: 'E6ZP31',
      nombre: 'KOSMO',
      descripcion:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      precio: '233.795',
      categoria: 3,
    },
    {
      modelo: 'IYTOB0',
      nombre: 'CURREN',
      descripcion:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      precio: '892.113',
      categoria: 7,
    },
    {
      modelo: 'BU0PDG',
      nombre: 'LOIX',
      descripcion: 'Morbi non quam nec dui luctus rutrum.',
      precio: '224.429',
      categoria: 1,
    },
    {
      modelo: 'RP39OQ',
      nombre: 'KOSMO',
      descripcion:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      precio: '897.593',
      categoria: 13,
    },
    {
      modelo: 'YJN9F6',
      nombre: 'NAVIFORCE',
      descripcion:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      precio: '368.719',
      categoria: 6,
    },
    {
      modelo: 'T4A45N',
      nombre: 'YESS',
      descripcion:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      precio: '955.907',
      categoria: 6,
    },
    {
      modelo: 'C0DFKF',
      nombre: 'G-FORCE',
      descripcion:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      precio: '093.979',
      categoria: 7,
    },
    {
      modelo: 'FYO4GV',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      precio: '758.931',
      categoria: 11,
    },
    {
      modelo: 'C51OG4',
      nombre: 'TEMPUS',
      descripcion:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
      precio: '691.604',
      categoria: 8,
    },
    {
      modelo: 'SAB3W0',
      nombre: 'KOSMO',
      descripcion:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      precio: '149.773',
      categoria: 14,
    },
    {
      modelo: 'CVOL60',
      nombre: 'LOTO',
      descripcion:
        'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
      precio: '773.898',
      categoria: 4,
    },
    {
      modelo: 'EI5C3Y',
      nombre: 'G-FORCE',
      descripcion:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
      precio: '818.759',
      categoria: 12,
    },
    {
      modelo: 'BGNQ3F',
      nombre: 'LOTO',
      descripcion:
        'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      precio: '953.616',
      categoria: 1,
    },
    {
      modelo: 'MKL70W',
      nombre: 'CASIO',
      descripcion: 'Ut at dolor quis odio consequat varius.',
      precio: '810.127',
      categoria: 10,
    },
    {
      modelo: 'DAVVWN',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      precio: '515.950',
      categoria: 15,
    },
    {
      modelo: 'RT9VGE',
      nombre: 'Q&Q',
      descripcion:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      precio: '830.288',
      categoria: 14,
    },
    {
      modelo: 'X04TPI',
      nombre: 'T5',
      descripcion:
        'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      precio: '935.939',
      categoria: 10,
    },
    {
      modelo: 'V61E6P',
      nombre: 'CASIO',
      descripcion:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      precio: '873.880',
      categoria: 12,
    },
    {
      modelo: 'CF2HPN',
      nombre: 'Q&Q',
      descripcion:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      precio: '326.522',
      categoria: 9,
    },
    {
      modelo: 'ESFRNO',
      nombre: 'G-FOX',
      descripcion:
        'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      precio: '143.469',
      categoria: 2,
    },
    {
      modelo: 'LQVWO4',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      precio: '065.179',
      categoria: 4,
    },
    {
      modelo: 'TMKBNQ',
      nombre: 'KOSMO',
      descripcion: 'Sed ante. Vivamus tortor.',
      precio: '469.353',
      categoria: 9,
    },
    {
      modelo: 'XFT1DF',
      nombre: 'T5',
      descripcion:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
      precio: '286.690',
      categoria: 11,
    },
    {
      modelo: 'DPZRC7',
      nombre: 'LOIX',
      descripcion:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      precio: '154.932',
      categoria: 10,
    },
    {
      modelo: 'T3HN6V',
      nombre: 'NAVIFORCE',
      descripcion:
        'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      precio: '971.375',
      categoria: 15,
    },
    {
      modelo: 'LRJB6M',
      nombre: 'Q&Q',
      descripcion:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
      precio: '533.001',
      categoria: 14,
    },
    {
      modelo: 'G21N1B',
      nombre: 'Q&Q',
      descripcion:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
      precio: '950.520',
      categoria: 1,
    },
    {
      modelo: 'UHEEBF',
      nombre: 'G-FORCE',
      descripcion:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
      precio: '277.758',
      categoria: 6,
    },
    {
      modelo: 'EHY0XJ',
      nombre: 'LOIX',
      descripcion:
        'Nullam sit amet turpis elementum ligula vehicula consequat.',
      precio: '433.830',
      categoria: 10,
    },
    {
      modelo: 'YFBLJP',
      nombre: 'T5',
      descripcion:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
      precio: '036.990',
      categoria: 5,
    },
    {
      modelo: 'FRFUKQ',
      nombre: 'Q&Q',
      descripcion:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
      precio: '553.495',
      categoria: 5,
    },
    {
      modelo: 'KRQQF1',
      nombre: 'KOSMO',
      descripcion:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      precio: '710.238',
      categoria: 10,
    },
    {
      modelo: 'J79KW2',
      nombre: 'G-FORCE',
      descripcion:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      precio: '109.256',
      categoria: 13,
    },
    {
      modelo: 'LHTW2F',
      nombre: 'CASIO',
      descripcion: 'Morbi porttitor lorem id ligula.',
      precio: '969.682',
      categoria: 11,
    },
    {
      modelo: 'ULR7PV',
      nombre: 'CURREN',
      descripcion:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
      precio: '391.565',
      categoria: 14,
    },
    {
      modelo: 'GBZVQ6',
      nombre: 'Q&Q',
      descripcion:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
      precio: '258.968',
      categoria: 6,
    },
    {
      modelo: 'DMWKFH',
      nombre: 'TEVISE',
      descripcion:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      precio: '839.110',
      categoria: 2,
    },
    {
      modelo: 'IOV30C',
      nombre: 'TEMPUS',
      descripcion:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
      precio: '449.963',
      categoria: 4,
    },
    {
      modelo: 'QV6QSM',
      nombre: 'YESS',
      descripcion: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      precio: '167.766',
      categoria: 1,
    },
    {
      modelo: 'XXWEZE',
      nombre: 'LOIX',
      descripcion:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      precio: '108.506',
      categoria: 8,
    },
    {
      modelo: 'V2K337',
      nombre: 'YESS',
      descripcion:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      precio: '245.029',
      categoria: 7,
    },
    {
      modelo: 'ADEWNY',
      nombre: 'G-FOX',
      descripcion:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      precio: '110.587',
      categoria: 14,
    },
    {
      modelo: 'WM5NLH',
      nombre: 'CURREN',
      descripcion:
        'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      precio: '303.033',
      categoria: 2,
    },
    {
      modelo: 'SPI980',
      nombre: 'KAIROS',
      descripcion:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      precio: '910.326',
      categoria: 3,
    },
    {
      modelo: 'QBQCUT',
      nombre: 'LOIX',
      descripcion:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      precio: '644.886',
      categoria: 3,
    },
    {
      modelo: 'B45XBN',
      nombre: 'G-FOX',
      descripcion:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      precio: '806.828',
      categoria: 11,
    },
    {
      modelo: 'Y24RJS',
      nombre: 'YESS',
      descripcion:
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
      precio: '600.539',
      categoria: 12,
    },
    {
      modelo: 'S0CPP1',
      nombre: 'LOTO',
      descripcion:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      precio: '683.502',
      categoria: 6,
    },
    {
      modelo: 'YCQTOK',
      nombre: 'T5',
      descripcion:
        'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      precio: '012.914',
      categoria: 11,
    },
    {
      modelo: 'HVUCI8',
      nombre: 'TEMPUS',
      descripcion:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
      precio: '067.515',
      categoria: 8,
    },
    {
      modelo: 'P31FOP',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
      precio: '791.944',
      categoria: 13,
    },
    {
      modelo: 'GMSGK9',
      nombre: 'Q&Q',
      descripcion:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
      precio: '913.805',
      categoria: 14,
    },
    {
      modelo: 'WZUPTV',
      nombre: 'T5',
      descripcion:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
      precio: '172.610',
      categoria: 13,
    },
    {
      modelo: 'WORZNO',
      nombre: 'G-FORCE',
      descripcion:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      precio: '486.079',
      categoria: 4,
    },
    {
      modelo: 'PJWEWV',
      nombre: 'G-FORCE',
      descripcion:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
      precio: '908.646',
      categoria: 6,
    },
    {
      modelo: 'WA9NE2',
      nombre: 'TEVISE',
      descripcion:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      precio: '048.283',
      categoria: 11,
    },
    {
      modelo: 'A3QEPQ',
      nombre: 'TEVISE',
      descripcion:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
      precio: '370.263',
      categoria: 14,
    },
    {
      modelo: 'KBFUF4',
      nombre: 'G-FORCE',
      descripcion:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      precio: '842.973',
      categoria: 3,
    },
    {
      modelo: 'VFN0Q4',
      nombre: 'NAVIFORCE',
      descripcion:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      precio: '278.044',
      categoria: 8,
    },
    {
      modelo: 'WERW8G',
      nombre: 'TEMPUS',
      descripcion:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
      precio: '827.111',
      categoria: 4,
    },
    {
      modelo: 'AQLY0G',
      nombre: 'LOIX',
      descripcion:
        'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
      precio: '888.008',
      categoria: 7,
    },
    {
      modelo: 'ID0ZMF',
      nombre: 'CASIO',
      descripcion: 'Proin risus. Praesent lectus.',
      precio: '374.807',
      categoria: 7,
    },
    {
      modelo: 'PELOEM',
      nombre: 'TEMPUS',
      descripcion:
        'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      precio: '786.564',
      categoria: 15,
    },
    {
      modelo: 'VUM5EF',
      nombre: 'YESS',
      descripcion:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
      precio: '289.508',
      categoria: 15,
    },
    {
      modelo: 'SFUZUU',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
      precio: '680.606',
      categoria: 15,
    },
    {
      modelo: 'U0532M',
      nombre: 'TEMPUS',
      descripcion:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
      precio: '157.151',
      categoria: 8,
    },
    {
      modelo: 'RLBJ72',
      nombre: 'G-FORCE',
      descripcion:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
      precio: '646.076',
      categoria: 12,
    },
    {
      modelo: 'Q7XYGX',
      nombre: 'KAIROS',
      descripcion:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
      precio: '188.714',
      categoria: 15,
    },
    {
      modelo: 'WOO27D',
      nombre: 'CURREN',
      descripcion:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      precio: '789.428',
      categoria: 3,
    },
    {
      modelo: 'LWKYFX',
      nombre: 'CASIO',
      descripcion:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      precio: '670.624',
      categoria: 4,
    },
    {
      modelo: 'B8S8O2',
      nombre: 'KOSMO',
      descripcion:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      precio: '028.968',
      categoria: 8,
    },
    {
      modelo: 'KUGW5V',
      nombre: 'Q&Q',
      descripcion:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      precio: '585.154',
      categoria: 7,
    },
    {
      modelo: 'YR5G1S',
      nombre: 'NAVIFORCE',
      descripcion:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      precio: '893.442',
      categoria: 12,
    },
    {
      modelo: 'T53QKB',
      nombre: 'Q&Q',
      descripcion:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      precio: '356.944',
      categoria: 9,
    },
    {
      modelo: 'NO5FFS',
      nombre: 'T5',
      descripcion:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
      precio: '079.266',
      categoria: 13,
    },
    {
      modelo: 'FZ0Y9M',
      nombre: 'TEVISE',
      descripcion:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
      precio: '716.805',
      categoria: 7,
    },
    {
      modelo: 'X7BQJQ',
      nombre: 'G SHOCK CASIO',
      descripcion:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      precio: '512.770',
      categoria: 13,
    },
    {
      modelo: 'A2TDJ7',
      nombre: 'NAVIFORCE',
      descripcion:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
      precio: '077.623',
      categoria: 12,
    },
    {
      modelo: 'A8LK8Z',
      nombre: 'CASIO',
      descripcion:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
      precio: '206.029',
      categoria: 12,
    },
    {
      modelo: 'FJ5R6S',
      nombre: 'NAVIFORCE',
      descripcion:
        'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      precio: '729.029',
      categoria: 13,
    },
    {
      modelo: 'YIE7OL',
      nombre: 'CURREN',
      descripcion:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      precio: '076.233',
      categoria: 6,
    },
    {
      modelo: 'WCLB4R',
      nombre: 'NAVIFORCE',
      descripcion:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      precio: '152.695',
      categoria: 5,
    },
    {
      modelo: 'MR01VF',
      nombre: 'KAIROS',
      descripcion: 'Duis at velit eu est congue elementum.',
      precio: '144.334',
      categoria: 5,
    },
    {
      modelo: 'V834TY',
      nombre: 'NAVIFORCE',
      descripcion:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
      precio: '880.811',
      categoria: 11,
    },
  ];
  private _categorias: categorias[] = [
    {
      nombre: 'KOSMO',
      CodCategoria: 'CT001',
    },
    {
      nombre: 'TEVISE',
      CodCategoria: 'CT002',
    },
    {
      nombre: 'NAVIFORCE',
      CodCategoria: 'CT003',
    },
    {
      nombre: 'CASIO',
      CodCategoria: 'CT004',
    },
    {
      nombre: 'Q&Q',
      CodCategoria: 'CT005',
    },
    {
      nombre: 'KAIROS',
      CodCategoria: 'CT006',
    },
    {
      nombre: 'TEMPUS',
      CodCategoria: 'CT007',
    },
    {
      nombre: 'YESS',
      CodCategoria: 'CT008',
    },
    {
      nombre: 'CURREN',
      CodCategoria: 'CT009',
    },
    {
      nombre: 'T5',
      CodCategoria: 'CT010',
    },
    {
      nombre: 'G-FORCE',
      CodCategoria: 'CT011',
    },
    {
      nombre: 'G SHOCK CASIO',
      CodCategoria: 'CT012',
    },
    {
      nombre: 'LOIX',
      CodCategoria: 'CT013',
    },
    {
      nombre: 'LOTO',
      CodCategoria: 'CT014',
    },
    {
      nombre: 'G-FOX',
      CodCategoria: 'CT015',
    },
  ];

  get productos(): productos[] {
    return [...this._relojes];
  }

  get categorias(): categorias[] {
    return [...this._categorias];
  }

  constructor() {}
}
