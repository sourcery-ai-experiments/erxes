export const TYPES = {
  PRODUCT: 'product',
  SERVICE: 'service',
  ALL: ['product', 'service']
};

export const PRODUCT_CATEGORY_STATUSES = [
  { label: 'Active', value: 'active' },
  { label: 'Disabled', value: 'disabled' },
  { label: 'Archived', value: 'archived' }
];

export const PRODUCT_SUPPLY = [
  { label: 'Unlimited', value: 'unlimited' },
  { label: 'Limited', value: 'limited' },
  { label: 'Unique', value: 'unique' }
];

export const PRODUCT_INFO = {
  name: 'Name',
  type: 'Type',
  category: 'Category',
  code: 'Code',
  description: 'Description',
  sku: 'Sku',
  unitPrice: 'UnitPrice',
  vendor: 'Vendor',

  ALL: [
    { field: 'name', label: 'Name' },
    { field: 'type', label: 'Type' },
    { field: 'category', label: 'Category' },
    { field: 'code', label: 'Code' },
    { field: 'description', label: 'Description' },
    { field: 'sku', label: 'Sku' },
    { field: 'unitPrice', label: 'UnitPrice' },
    { field: 'vendor', label: 'Vendor' }
  ]
};

export const TAX_TYPES = {
  2: {
    label: 'Free',
    options: [
      {
        value: '301',
        label:
          '301 - Гаалийн байгууллагаас баталсан, зорчигчдод татваргүй нэвтрүүлэхийг зөвшөөрсөн хэмжээ бүхий биедээ авч яваа хувийн хэрэглээний бараа'
      },
      {
        value: '302',
        label:
          '302 - Монгол Улсын нутаг дэвсгэрт байнга оршин суудаг гадаадын дипломат төлөөлөгчийн болон консулын газар, Нэгдсэн үндэсний байгууллага, түүний төрөлжсөн салбарын хэрэгцээнд зориулан импортоор оруулсан бараа'
      },
      {
        value: '304',
        label:
          '304 - Гадаад улсын Засгийн газар, олон улсын байгууллагаас буцалтгүй болон хүмүүнлэгийн тусламж, хөнгөлөлттэй зээлээр авсан бараа'
      },
      {
        value: '305',
        label:
          '305 - Хөгжлийн бэрхшээлтэй иргэний хэрэглээнд зориулсан тусгай зориулалтын хэрэгсэл, тоног төхөөрөмж, автотээврийн хэрэгсэл'
      },
      {
        value: '306',
        label:
          '306 - Зэвсэгт хүчин, цагдаа, улсын аюулгүй байдлыг хангах, шүүхийн шийдвэр биелүүлэх байгууллагын хэрэгцээнд зориулан импортоор оруулж байгаа зэвсэг, тусгай техник хэрэгсэл'
      },
      {
        value: '307',
        label: '307 - Агаарын зорчигч тээврийн хөлөг, түүний сэлбэг'
      },
      {
        value: '308',
        label:
          '308 - Орон сууцны зориулалтаар ашиглаж байгаа байр буюу түүний хэсгийг борлуулсны орлого'
      },
      {
        value: '310',
        label:
          '310 - Эмчилгээний зориулалтаар хэрэглэх цус, цусан бүтээгдэхүүн, эд эрхтэн'
      },
      {
        value: '311',
        label:
          '311 - Хийн түлш, түүний сав, тоног төхөөрөмж, тусгай зориулалтын машин механизм, техник хэрэгсэл, тоноглол'
      },
      {
        value: '312',
        label:
          '312 - Гадаад улсад захиалгаар хийлгэсэн Монгол Улсын үндэсний мөнгөн тэмдэгт'
      },
      { value: '313', label: '313 - Борлуулсан алт' },
      {
        value: '315',
        label: '315 - Эрдэм шинжилгээ, судалгааны ажлын туршилтын бүтээгдэхүүн'
      },
      {
        value: '421',
        label:
          '421 - энэ хуулийн 12.1.7-д зааснаас бусад экспортод гаргасан ашигт малтмалын бүтээгдэхүүн'
      },
      {
        value: '407',
        label:
          '407 - банк, банк бус санхүүгийн байгууллага болон бусад хуулийн этгээдээс банк, тусгай зориулалтын компани, орон сууцны санхүүжилтийн компанид хөрөнгөөр баталгаажсан үнэт цаас гаргах зориулалтаар шилжүүлсэн зээл, санхүүгийн түрээсийн гэрээнээс үүсэх аливаа шаардах эрх'
      },
      {
        value: '318',
        label:
          '318 - газар тариалан эрхлэгчийн дотооддоо тарьж борлуулсан үр тариа, төмс, хүнсний ногоо, суулгац, жимс жимсгэнэ, үйлдвэрлэсэн гурил'
      },
      {
        value: '319',
        label:
          '319 - Монгол Улсын нутаг дэвсгэрт үйлдвэрийн аргаар төхөөрч бэлтгэн дотооддоо борлуулсан тураг болон шулж ангилсан мах, боловсруулаагүй дотор эрхтэн, дайвар бүтээгдэхүүн;'
      },
      {
        value: '320',
        label:
          '320 - Монгол Улсын нутаг дэвсгэрт дотоодын түүхий эдээр боловсруулан дотооддоо борлуулсан хүнсний сүү, сүүн бүтээгдэхүүн'
      },
      {
        value: '419',
        label:
          '419 - Монгол Улсын нутаг дэвсгэрт үйлдвэрлэсэн, үйлдвэрлэн борлуулсан жижиг, дунд үйлдвэрийн үйлдвэрлэлийн зориулалт бүхий тоног төхөөрөмж, сэлбэг хэрэгсэл;'
      },
      {
        value: '423',
        label:
          '423 - инновацийн төслөөр дотоод, гадаадын зах зээлд шинэ бараа, бүтээгдэхүүний үйлдвэрлэл явуулахад шаардлагатай, дотоодод үйлдвэрлэдэггүй түүхий эд, материал, урвалж бодис;'
      },
      {
        value: '424',
        label:
          '424 - импортоор оруулж байгаа бөөрөнхий мод, гуалин, зүсмэл материал, банз, модон бэлдэц, хагас боловсруулсан модон материал;'
      },
      {
        value: '425',
        label:
          '425 - экспортод гаргасан түүхий болон угаасан, самнасан ноолуур, арьс шир'
      },
      {
        value: '426',
        label:
          '426 - соёлын өвийг судалж шинжлэх, сэргээн засварлахад ашиглах материал, техник, тоног төхөөрөмж, бодис, багаж хэрэгсэл'
      },
      {
        value: '303',
        label:
          '303 - Монгол Улсаас гадаад улсад суугаа дипломат төлөөлөгчийн болон консулын газрын албан ажлын болон тэдгээрт ажиллагсдын хувийн хэрэгцээнд зориулан худалдаж авсан бараа, ажил, үйлчилгээг тухайн улсад албан татвараас чөлөөлдөг бол тэр улсаас Монгол Улсад суугаа дипломат төлөөлөгчийн болон консулын газрын албан ажлын болон тэдгээрт ажиллагсдын хувийн хэрэгцээнд зориулж Монгол Улсын нутаг дэвсгэрт худалдан авсан бараа, гүйцэтгэсэн ажил, үзүүлсэн үйлчилгээ'
      },
      {
        value: '427',
        label:
          '427 - нэг сарын хөдөлмөрийн хөлсний доод хэмжээг 10 дахин, зөөврийн компьютерийн хувьд 30 дахин нэмэгдүүлснээс дээшгүй үнийн дүнтэй, ижил төрлийн хоёроос илүүгүй бараа бүхий хувь хүний нэр дээр илгээсэн улс хоорондын шуудангийн илгээмж'
      },
      {
        value: '309',
        label:
          '309 - гэрээлэгч болон туслан гүйцэтгэгч нь газрын тос, уламжлалт бус газрын тостой холбогдсон үйл ажиллагаанд зориулан хайгуулын нийт хугацаанд болон ашиглалтын эхний таван жилд импортолсон тусгай зориулалтын машин, техник хэрэгсэл, тоног төхөөрөмж, тоноглол, түүхий эд, материал, химийн болон тэсрэх бодис, сэлбэг хэрэгсэл'
      },
      {
        value: '428',
        label:
          '428 - газрын тос болон уламжлалт бус газрын тостой холбогдсон тайлан материал, дээж болон газрын тос'
      },
      {
        value: '429',
        label:
          '429 - чөлөөт бүсэд зорчигчийн худалдаж авсан гурван сая төгрөг хүртэл үнийн дүнтэй бараа'
      },
      { value: '401', label: '401 - валют солих үйлчилгээ' },
      {
        value: '402',
        label:
          '402 - мөнгө хүлээн авах, шилжүүлэх, баталгаа, төлбөрийн нэхэмжлэл гаргах, вексель, хадгаламжийн данстай холбогдсон банкны үйлчилгээ'
      },
      {
        value: '403',
        label:
          '403 - даатгал, даатгалын зуучлал, давхар даатгал, эд хөрөнгийн бүртгэлийн үйлчилгээ'
      },
      {
        value: '404',
        label:
          '404 - үнэт цаас, хувьцаа гаргах, шилжүүлэх, борлуулах, хүлээн авах, тэдгээрт баталгаа гаргах үйлчилгээ'
      },
      { value: '405', label: '405 - зээл олгох үйлчилгээ' },
      {
        value: '406',
        label:
          '406 - нийгмийн болон эрүүл мэндийн даатгалын сангийн мөнгөн хөрөнгийг байршуулсны хүүг олгох, шилжүүлэх үйлчилгээ'
      },
      {
        value: '407',
        label:
          '407 - банкны болон банк бус санхүүгийн байгууллага, хадгаламж зээлийн хоршооны зээлийн хүү, санхүүгийн түрээсийн хүү, ногдол ашиг, зээлийн баталгааны хураамж, даатгалын гэрээний хураамж төлөх үйлчилгээ'
      },
      {
        value: '408',
        label:
          '408 - орон сууцны зориулалтаар баригдсан зориулалтын дагуу ашиглагдаж байгаа байрыг болон түүний тодорхой хэсгийг хөлслүүлэх үйлчилгээ'
      },
      {
        value: '409',
        label:
          '409 - боловсролын болон мэргэжлийн сургалт явуулах тусгай зөвшөөрөлтэй хувь хүн, хуулийн этгээдийн эрхлэн гүйцэтгэж байгаа дүрэмд нь заасан боловсрол, мэргэжил олгох үйлчилгээ'
      },
      { value: '410', label: '410 - эрүүл мэндийн үйлчилгээ' },
      { value: '411', label: '411 - шашны байгууллагын үйлчилгээ' },
      {
        value: '412',
        label:
          '412 - төрийн байгууллагаас үзүүлж байгаа үйлчилгээ. Үүнд Засгийн газар, түүний агентлагууд, төсөвт байгууллагуудаас үзүүлж байгаа төрийн үйлчилгээ хамаарна'
      },
      {
        value: '413',
        label:
          '413 - Автотээврийн тухай хуулийн 3.1.11-д заасан нийтийн тээврийн үйлчилгээ'
      },
      {
        value: '414',
        label:
          '414 - аялал жуулчлалын үйл ажиллагаа эрхэлдэг хуулийн этгээд гадаад улсын аялал жуулчлалын байгууллагатай гэрээ байгуулж жуулчдыг нь хүлээн авах, уг үйлчилгээг төлөвлөх, сурталчлах, бичиг баримтыг нь бүрдүүлэх зэрэг гадаадын жуулчдад үзүүлсэн /туроператор/ үйлчилгээ'
      },
      { value: '430', label: '430 - соёлын өвийг сэргээн засварлах үйлчилгээ' },
      { value: '431', label: '431 - оршуулгын үйлчилгээ' },
      {
        value: '432',
        label:
          '432 - Монгол Улсын Засгийн газраас гадаад улсын Засгийн газар, олон улсын байгууллагатай байгуулж соёрхон баталсан олон улсын гэрээний дагуу санхүүжигдэх бараа, ажил, үйлчилгээ'
      }
    ]
  },
  3: {
    label: '0 percent',
    options: [
      {
        value: '501',
        label:
          '501 - Монгол Улсын нутаг дэвсгэрээс экспортод гаргасан, гаалийн байгууллагад мэдүүлсэн бараа'
      },
      {
        value: '502',
        label:
          '502 - Монгол Улсын Олон улсын гэрээнд заасны дагуу Монгол Улсаас гадаад улсад, гадаад улсаас Монгол Улс хүртэл, түүнчлэн гадаад улсаас Монгол Улсын хилээр дамжуулан бусад улсад гаргасан олон улсын зорчигч болон ачаа тээврийн үйлчилгээ'
      },
      {
        value: '503',
        label:
          '503 - Монгол Улсын нутаг дэвсгэрээс гадна үзүүлсэн /албан татвараас чөлөөлсөн үйлчилгээг оролцуулан/ үйлчилгээ'
      },
      {
        value: '504',
        label:
          '504 - Монгол Улсад оршин суугч бус этгээдэд үзүүлсэн үйлчилгээ /түүний дотор албан татвараас чөлөөлсөн үйлчилгээг оролцуулан/'
      },
      {
        value: '505',
        label:
          '505 - олон улсын нислэг үйлдэж байгаа дотоодын болон гадаадын агаарын тээврийн хөлөгт үзүүлэх нислэгийн хөдөлгөөний удирдлага, техникийн болон шатахууны үйлчилгээ, цэвэрлэгээ, нислэгийн явцад нисэх бүрэлдэхүүн, болон зорчигчдод худалдаа, хоол, ундаагаар үйлчилсэн үйлчилгээ'
      },
      {
        value: '506',
        label:
          '506 - Засгийн газар, Монголбанкны захиалгаар дотоодод үйлдвэрлэсэн төрийн одон медаль, мөнгөн тэмдэгт, зоос'
      },
      { value: '507', label: '507 - ашигт малтмалын эцсийн бүтээгдэхүүн' }
    ]
  },
  5: {
    label: 'Inner',
    options: []
  }
};