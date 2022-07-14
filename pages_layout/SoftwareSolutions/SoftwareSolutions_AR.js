import { Divider } from '@mui/material';
import React from 'react';
// import Article1 from '../../components/Article1/Article1';
import Article1_AR from '../../components/Article1/Article1_AR';
import GridLinks_AR from '../../components/GridLinks/GridLinks_AR';
// import Article2_EN from '../../components/Article2/Article2_EN';
// import Article3_EN from '../../components/Article3/Article3_EN';
// import GridLinks_EN from '../../components/GridLinks/GrindLinks_EN';
import { paper_1_color, dark_grey, light_beige, light_blue, medium_blue, medium_purple, very_light_red, grey_1, grey_2, grey_3, purple_1, white_1 } from '../../public/colors'

export default function SoftwareSolutions_AR() {

  const softwareSolutionsTitle = "حلول البرمجيات";
  const softwareSolutionsParagraphs = [
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'جنبًا إلى جنب معك ومع فريقك ، نقوم بتحليل معالجة حجم المستندات الخاصة بك وتحديد نقاط الضعف وربما تغييرها إلى حل مكتب فردي خاص بك',
      imgURL: null,
    },
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'وفر الوقت وتحكم في بيئات الطباعة الخاصة بك من خلال الحلول التي تخصص مستنداتك ، وتوزعها تلقائيًا على وجهات متعددة ، وتحمي بياناتك',
      imgURL: null,
    },
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'سيسعد خبراؤنا بمساعدتك في استشارة شخصية في الموقع لإنشاء مفهوم حل فردي لك',
      imgURL: null,
    },
  ];
  const gridTitle = 'حلول سير العمل';
  const gridItemBackground = white_1;
  const gridItemBackgroundHover = grey_2;
  const gridTextColor = grey_2;
  const gridTextColorHover = white_1;
  const gridMainDivColor = 'linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)';
  const gridTitleColor = grey_2;
  const gridComponents = [
    {
      listTitle: ':طباعة النموذج',
      listIems: ['إنتاج النماذج محليًا', 'طباعة النماذج حسب الحاجة', 'لا نفايات بسبب التغييرات الضرورية على النماذج', 'طباعة النماذج بالبيانات'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':لمسح المستندات ضوئيًا',
      listIems: ['إنشاء ملفات PDF أو JPEG أو Word أو Excel أو OpenOffice أو Tiff قابلة للبحث فيها', 'قم بمسح المستندات ضوئيًا إلى مجلدات الشبكة أو مباشرة إلى حلول الأرشفة أو سير العمل', 'مسح المستندات ضوئيًا إلى Sharepoint', 'الصياغة الرئيسية للمستندات الممسوحة ضوئيًا مباشرة في الطابعة متعددة الوظائف', 'أرسل مباشرة عبر البريد الإلكتروني'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':التكاليف',
      listIems: ['قم بتحليل الأجهزة التي يتم استخدامها بشكل مفرط أو غير مستغلة', 'قم بتعيين التكاليف حسب القسم أو مركز التكلفة أو المشروع أو العميل ، إلخ', 'التقط كيف ومن يستخدم الطابعات والأجهزة متعددة الوظائف (MFP)', 'إنتاج تقارير عن استخدام الجهاز'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':حماية',
      listIems: ['إخراج مهام الطباعة فقط بعد مصادقة المستخدم على الجهاز عبر رقم التعريف الشخصي أو البطاقة الممغنطة أو القرب', 'الحذف التلقائي للوظائف المحفوظة بعد فترة زمنية محددة'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':الطباعة المستندة إلى القواعد',
      listIems: ['أي مستخدم قد يستخدم وظائف معينة على أي جهاز وإلى أي مدى (مثل المطبوعات والنسخ الملونة)'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':الطباعة الموزعة',
      listIems: ['يمكن للمستخدمين جمع مهام الطباعة الخاصة بهم من أي جهاز في الشبكة', 'أرسل مهام الطباعة عبر البريد الإلكتروني من أي جهاز (كمبيوتر محمول ، المساعد الرقمي الشخصي ، الهاتف المحمول) كمرفق PDF بالطابعة متعددة الوظائف'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':خدمة الطباعة لي',
      listIems: ['إخراج مهام الطباعة فقط بعد مصادقة المستخدم', 'يمكن تحديد مهام الطباعة مباشرة على الطابعة', 'وفر التكاليف عن طريق حذف أو تصحيح الوظائف'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: ':(OCR) التعرف على النص',
      listIems: ['قم بتحويل المستند الممسوح ضوئيًا إلى تنسيقات مستندات مختلفة ، مثل PDF و Word وغيرها الكثير', 'ملفات قابلة للتحرير والبحث'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: '!يسعدنا تقديم المشورة لك بشكل شامل',
      listIems: null,
      url: null,
      // gridBackground: '',
      // textColor: '',
    }
  ]

  return (
    <div className="analysis-and-advice-main-div">
      <Article1_AR articleTitle={softwareSolutionsTitle} articleParagraphs={softwareSolutionsParagraphs} />
      {/* <Divider style={{ backgroundColor: 'black' }} /> */}
      {/* <div style={{ width: '100%' }}>
        <Divider />

      </div> */}
      {/* <br /> */}
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      {/* <Divider className="article1-article-body-divider" /> */}
      <GridLinks_AR gridTitle={gridTitle} gridComponents={gridComponents} gridMainDivColor={gridMainDivColor} gridItemBackground={gridItemBackground} gridTextColor={gridTextColor} gridTitleColor={gridTitleColor} gridItemBackgroundHover={gridItemBackgroundHover} gridTextColorHover={gridTextColorHover} />
    </div>
  );
}
