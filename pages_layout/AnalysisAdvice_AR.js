import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Divider } from '@material-ui/core';
import Article1 from '../components/Article1/Article1';
import Article1_AR from '../components/Article1/Article1_AR';

export default function AnalysisAdvice_AR() {
  const articleTitle_1 = 'تحليل البنية التحتية';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  const articleParagraphs_1 = [
    {
      heading: 'لماذا البنية التحتية لتكنولوجيا المعلومات مهمة؟',
      text: 'تدعم التكنولوجيا كل جانب من جوانب أعمال اليوم تقريبًا ، من عمل الموظف الفردي إلى العمليات إلى السلع والخدمات. عند الاتصال بالشبكة بشكل صحيح ، يمكن تحسين التكنولوجيا لتحسين الاتصال وخلق الكفاءات وزيادة الإنتاجية',
      imgURL: null,
    },
    {
      heading: null,
      text: 'إذا كانت البنية التحتية لتكنولوجيا المعلومات مرنة وموثوقة وآمنة ، فيمكنها مساعدة المؤسسة على تحقيق أهدافها وتوفير ميزة تنافسية في السوق. بدلاً من ذلك ، إذا لم يتم تنفيذ البنية التحتية لتكنولوجيا المعلومات بشكل صحيح ، فقد تواجه الشركات مشكلات الاتصال والإنتاجية والأمان - مثل اضطرابات النظام والاختراقات. بشكل عام ، يمكن أن يكون وجود بنية تحتية مطبقة بشكل صحيح عاملاً في تحديد ما إذا كانت الأعمال التجارية مربحة أم لا',
      imgURL: null,
    },
    {
      heading:
        'لماذا أحتاج إلى إلقاء نظرة على البنية التحتية للطباعة الخاصة بي؟',
      text: 'لم تعد طابعة المكتب مجرد الجهاز في الزاوية بعد الآن. بينما أصبح النسخ والإرسال عبر الفاكس أقل شيوعًا ، أصبح مسح المستندات ضوئيًا ومشاركتها مكونين حيويين في استمرار حركة الأعمال. على هذا النحو ، يجب دمج الطابعة في الشبكة الأوسع للأجهزة والأنظمة الأساسية التي يستخدمها الأشخاص ، ويمكن أحيانًا التغاضي عن ذلك',
      imgURL: null,
    },
    {
      heading: 'هل تتطلع إلى تحسين البنية التحتية للطباعة لشركتك؟',
      imgURL: null,
      text: `نقوم بتحليل البنية التحتية للمكتب المستخدمة (الطابعات وآلات النسخ والماسحات الضوئية والأجهزة متعددة الوظائف) والبرامج المتصلة من أجلك. هذا هو أهم شرط مسبق لتحسين شامل ومستدام لإدارة الطباعة والوثائق الخاصة بك. نسجل مشهد النظام الخاص بك في الموقع ونضع اقتراحًا للتحسين مصممًا خصيصًا لشركتك`,
    },
  ];
  const articleTitle_2 = 'تحسين الموارد';
  const articleParagraphs_2 = [
    {
      heading: 'إدارة البنية التحتية للطباعة لتكون آمنة وفعالة للمستقبل',
      text: 'هل تسعى شركتك إلى تقليل تكاليف الطباعة والتكاليف ذات الصلة ، ونشر الرقمنة في جميع أنحاء مكان العمل ، وتحسين الكفاءة والتأكد من قدرة موظفيك على الطباعة والنسخ دون قيود - حتى إذا كانت الطابعة غير متوفرة؟ أو ربما تريد نظرة عامة شاملة والتحكم في بيئة الطباعة ، وتأمين تلك البيئة والقضاء على الوصول غير المصرح به إلى المستندات السرية والمعلومات الحساسة؟ معنا سنحلل معًا كيفية تحسين الموارد المتاحة لتقليل وقت التعطل أو التكاليف',
      imgURL: null,
    },
    {
      heading:
        'إذن كيف يمكنني إدارة البنية التحتية للطباعة بشكل أفضل لدعم نمو الأعمال؟',
      imgURL: null,
      text: 'يؤدي وجود طابعات منفصلة وغير متصلة عن عدد من الموردين إلى زيادة التكاليف ومشكلات الأمان وكفاءة الأعمال. في كثير من الأحيان ، لا تقدر الأنشطة التجارية عدد الطابعات التي يتم تشغيلها وتأثير ذلك. في المقام الأول ، يحدد تدقيق أسطول الطباعة المعدات التي لديك وأين. إنها الخطوة الأولى في تجميع بنية أساسية متكاملة للطباعة يمكن إدارتها بشكل استباقي. يمكّنك هذا من إجراء تحسينات ملموسة على العملية تزيد من المساءلة والتحكم',
    },

    // {
    //   heading: null,
    //   text: 'If an IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market. Alternatively, if an IT infrastructure isn’t properly implemented, businesses can face connectivity, productivity and security issues—like system disruptions and breaches. Overall, having a properly implemented infrastructure can be a factor in whether a business is profitable or not.',
    //   imgURL: null,
    // },
  ];
  const analysisArticleTitle = 'تحليل البنية التحتية';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  const analysisArticleParagraphs = [
    {
      heading: 'هل ترغب في تحسين شيء ما في شركتك على المدى الطويل؟',
      text: 'نحتاج أولاً إلى تسجيل الوضع الأولي. نقوم بتحليل البنية التحتية للمكتب المستخدمة (الطابعات وآلات النسخ والماسحات الضوئية والأجهزة متعددة الوظائف) والبرامج المتصلة من أجلك. هذا هو أهم شرط مسبق لتحسين شامل ومستدام لإدارة الطباعة والوثائق الخاصة بك. نسجل مشهد النظام الخاص بك في الموقع ونضع اقتراحًا للتحسين مصممًا خصيصًا لشركتك',
      imgURL: null,
    },
  ];
  return (
    <div className="analysis-and-advice-main-div">
      {/* <Article1_AR
        articleTitle={articleTitle_1}
        // articleSecondaryTitle={articleSecondaryTitle_2}
        articleParagraphs={articleParagraphs_1}
      />
      <Article1_AR
        articleTitle={articleTitle_2}
        articleParagraphs={articleParagraphs_2}
      />
      <div
        style={{
          width: '100%',
          height: '7vh',
          minHeight: '20px',
          backgroundColor: 'transparent',
        }}
      ></div> */}
      <Article1_AR
        articleTitle={analysisArticleTitle}
        // articleSecondaryTitle={articleSecondaryTitle_2}
        articleParagraphs={analysisArticleParagraphs}
      />
    </div>
  );
}
