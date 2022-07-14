const {
  analysisAdviceRoute,
  officeSolutionsRoute,
  softwareSolutionsRoute,
  technicalSupportRoute, infoPrintCopyRoute, documentManagementRoute, fleetManagementRoute, assetManagementRoute
} = require('../../src/routes');

const printAndCopyTextEN = 'Print & Copy';
const printAndCopyTextAR = 'الطباعة و الطباعة التصويرية';

const printAndCopyMenu1EN = 'Analysis & advice';
const printAndCopyMenu1AR = 'تحديد متطلبات المكتب من الطابعات';
const printAndCopyMenu1Link = analysisAdviceRoute;
const printAndCopyMenu1Key = 'infra_analysis';
const printAndCopyMenu2EN = 'Office Solutions';
const printAndCopyMenu2AR = 'مستلزمات المكتب طابعات';
const printAndCopyMenu2Link = officeSolutionsRoute;
const printAndCopyMenu2Key = 'office_solutions';
const printAndCopyMenu3EN = 'Production Pressure';
const printAndCopyMenu3AR = 'طابعات الأنتاج العالي';
const printAndCopyMenu3Link = analysisAdviceRoute;
const printAndCopyMenu3Key = 'production_pressure';
const printAndCopyMenu4EN = 'Large format / plate printing';
const printAndCopyMenu4AR = 'طباعة خرائط';
const printAndCopyMenu4Link = analysisAdviceRoute;
const printAndCopyMenu4Key = 'large_format';
const printAndCopyMenu5EN = 'Software solutions';
const printAndCopyMenu5Link = softwareSolutionsRoute;
const printAndCopyMenu5AR = 'برامج ادارة الطباعة';
const printAndCopyMenu5Key = 'software_solutions';
const printAndCopyMenu6EN = 'Technology and Support';
const printAndCopyMenu6AR = 'الدعم الفني';
const printAndCopyMenu6Link = technicalSupportRoute;
const printAndCopyMenu6Key = 'tech_support';
const printAndCopyMenu7EN = 'Useful Information';
const printAndCopyMenu7AR = 'معلومات تهمك';
const printAndCopyMenu7Link = infoPrintCopyRoute;
const printAndCopyMenu7Key = 'useful_information';

const softwareSolutionsTextEN = 'Software solutions';
const softwareSolutionsTextAR = 'برامج الأدارة';
const softwareSolutionsMenu1EN = 'Document management';
const softwareSolutionsMenu1AR = 'برامج أدارة الطابعات والمستخدمين';
const softwareSolutionsMenu1Key = 'document_management';
const softwareSolutionsMenu1Link = documentManagementRoute;
const softwareSolutionsMenu2EN = 'Fleet management';
const softwareSolutionsMenu2AR = 'برامج أدارة الأجهزة';
const softwareSolutionsMenu2Key = 'fleet_management';
const softwareSolutionsMenu2Link = fleetManagementRoute;
const softwareSolutionsMenu3EN = 'Asset tracking & management';
const softwareSolutionsMenu3AR = 'برامج أدارة الأصول و متابعة الأستهلاك';
const softwareSolutionsMenu3Key = 'asset_management';
const softwareSolutionsMenu3Link = assetManagementRoute;

const officeEquipmentTextEN = 'Office equipment';
const officeEquipmentTextAR = 'مستلزمات المكاتب من الأثاث';

const officeSuppliesTextEN = 'Office supplies';
const officeSuppliesTextAR = 'مستلزمات المكاتب من الأدوات الكتابة';

const officeSuppliesMenu1EN = 'Office Solutions';
const officeSuppliesMenu2EN = 'Office Solutions';
const officeSuppliesMenu3EN = 'Office Solutions';
const officeSuppliesMenu4EN = 'Office Solutions';

const servicesTextEN = 'Serivces';
const servicesTextAR = 'خدماتنا';
const servicesMenu1EN = 'Newsletter';
const servicesMenu1AR = 'مجلد';
const servicesMenu1Key = 'newsletter';
const servicesMenu2EN = 'Online support';
const servicesMenu2AR = 'الدعم الفني';
const servicesMenu2Key = 'online_support';
const servicesMenu3EN = 'Report fault';
const servicesMenu3AR = 'ابلاغ عن عطل';
const servicesMenu3Key = 'report_fault';
const servicesMenu4EN = 'Report meter reading';
const servicesMenu4AR = 'تسجيل عداد';
const servicesMenu4Key = 'report_meter_reading';
const servicesMenu5EN = 'Start remote maintenance';
const servicesMenu5AR = 'بدء الصيانة عن بعد';
const servicesMenu5Key = 'start_remote_maintenance';
const servicesMenu6EN = 'Callback service';
const servicesMenu6AR = 'طلب صيانة';
const servicesMenu6Key = 'callback_service';
const servicesMenu7EN = 'Return toner & empty toner';
const servicesMenu7AR = 'اعادة أحبار فارغة';
const servicesMenu7Key = 'return_toner';
const servicesMenu8EN = 'Order consumables';
const servicesMenu8AR = 'طلب مستهلاكات الطباعة';
const servicesMenu8Key = 'order_consumbales';
const servicesMenu9EN = 'Userful information';
const servicesMenu9AR = 'معلومات هامة';
const servicesMenu9Key = 'useful_information';

module.exports = {
  printAndCopyTextEN,
  printAndCopyTextAR,
  printAndCopyMenu1EN,
  printAndCopyMenu1AR,
  printAndCopyMenu1Key,
  printAndCopyMenu2EN,
  printAndCopyMenu2AR,
  printAndCopyMenu2Key,
  printAndCopyMenu3EN,
  printAndCopyMenu3AR,
  printAndCopyMenu3Key,
  printAndCopyMenu4EN,
  printAndCopyMenu4AR,
  printAndCopyMenu4Key,
  printAndCopyMenu5EN,
  printAndCopyMenu5AR,
  printAndCopyMenu5Key,
  printAndCopyMenu6EN,
  printAndCopyMenu6AR,
  printAndCopyMenu6Key,
  printAndCopyMenu7EN,
  printAndCopyMenu7AR,
  printAndCopyMenu7Key,
  printAndCopyMenu1Link,
  printAndCopyMenu2Link,
  printAndCopyMenu3Link,
  printAndCopyMenu4Link,
  printAndCopyMenu5Link,
  printAndCopyMenu6Link,
  printAndCopyMenu7Link,

  softwareSolutionsTextEN,
  softwareSolutionsTextAR,
  softwareSolutionsMenu1EN,
  softwareSolutionsMenu1AR,
  softwareSolutionsMenu1Key,
  softwareSolutionsMenu1Link,
  softwareSolutionsMenu2EN,
  softwareSolutionsMenu2AR,
  softwareSolutionsMenu2Key,
  softwareSolutionsMenu2Link,
  softwareSolutionsMenu3EN,
  softwareSolutionsMenu3AR,
  softwareSolutionsMenu3Key,
  softwareSolutionsMenu3Link,

  officeEquipmentTextEN,
  officeEquipmentTextAR,

  officeSuppliesTextEN,
  officeSuppliesTextAR,

  servicesTextEN,
  servicesTextAR,
  servicesMenu1EN,
  servicesMenu1AR,
  servicesMenu1Key,
  servicesMenu2EN,
  servicesMenu2AR,
  servicesMenu2Key,
  servicesMenu3EN,
  servicesMenu3AR,
  servicesMenu3Key,
  servicesMenu4EN,
  servicesMenu4AR,
  servicesMenu4Key,
  servicesMenu5EN,
  servicesMenu5AR,
  servicesMenu5Key,
  servicesMenu6EN,
  servicesMenu6AR,
  servicesMenu6Key,
  servicesMenu7EN,
  servicesMenu7AR,
  servicesMenu7Key,
  servicesMenu8EN,
  servicesMenu8AR,
  servicesMenu8Key,
  servicesMenu9EN,
  servicesMenu9AR,
  servicesMenu9Key,
};
