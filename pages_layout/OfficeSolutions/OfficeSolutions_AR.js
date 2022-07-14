import React from 'react';
import Article2_AR from '../../components/Article2/Article2_AR';
import Article3_AR from '../../components/Article3/Article3_AR';
import { paper_1_color, dark_grey, light_beige, light_blue, medium_blue, medium_purple, very_light_red } from '../../public/colors'

export default function OfficeSolutions_AR() {
  const articleTitle_1 = 'تحليل البنية التحتية';
  const articleImageURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const articleParagraphs_1 = [
    {
      heading: 'لماذا البنية التحتية لتكنولوجيا المعلومات مهمة؟',
      text: 'تدعم التكنولوجيا كل جانب من جوانب أعمال اليوم تقريبًا ، من عمل الموظف الفردي إلى العمليات إلى السلع والخدمات. عند الاتصال بالشبكة بشكل صحيح ، يمكن تحسين التكنولوجيا لتحسين الاتصال وخلق الكفاءات وزيادة الإنتاجية',
    },
    {
      heading: null,
      text: 'إذا كانت البنية التحتية لتكنولوجيا المعلومات مرنة وموثوقة وآمنة ، فيمكنها مساعدة المؤسسة على تحقيق أهدافها وتوفير ميزة تنافسية في السوق. بدلاً من ذلك ، إذا لم يتم تنفيذ البنية التحتية لتكنولوجيا المعلومات بشكل صحيح ، فقد تواجه الشركات مشكلات الاتصال والإنتاجية والأمان - مثل اضطرابات النظام والاختراقات. بشكل عام ، يمكن أن يكون وجود بنية تحتية مطبقة بشكل صحيح عاملاً في تحديد ما إذا كانت الأعمال التجارية مربحة أم لا',
    },
    {
      heading: 'لماذا أحتاج إلى إلقاء نظرة على البنية التحتية للطباعة الخاصة بي؟',
      text: 'لم تعد طابعة المكتب مجرد الجهاز في الزاوية بعد الآن. بينما أصبح النسخ والإرسال عبر الفاكس أقل شيوعًا ، أصبح مسح المستندات ضوئيًا ومشاركتها مكونين حيويين في استمرار حركة الأعمال. على هذا النحو ، يجب دمج الطابعة في الشبكة الأوسع للأجهزة والأنظمة الأساسية التي يستخدمها الأشخاص ، ويمكن أحيانًا التغاضي عن ذلك',
    },
    {
      heading: 'هل تتطلع إلى تحسين البنية التحتية للطباعة لشركتك؟',
      text: `نقوم بتحليل البنية التحتية للمكتب المستخدمة (الطابعات وآلات النسخ والماسحات الضوئية والأجهزة متعددة الوظائف) والبرامج المتصلة من أجلك. هذا هو أهم شرط مسبق لتحسين شامل ومستدام لإدارة الطباعة والوثائق الخاصة بك. نسجل مشهد النظام الخاص بك في الموقع ونضع اقتراحًا للتحسين مصممًا خصيصًا لشركتك`,
      isBullet: true,
      listTitle: ':هذا عنوان قائمة نقطية',
      listItems: ['نقطية 1', 'نقطية 2'],
    },
  ];
  const articleTitle_2 = 'Optimizing resources';
  const articleParagraphs_2 = [
    {
      heading:
        'Managing your print infrastructure to be secure and efficient for the future',
      text: 'Is your company seeking to reduce its printing and related costs, roll out digitisation throughout the workplace, improve efficiency and ensure your employees can print and copy without limitation – even if a printer is unavailable? Or maybe you want a comprehensive overview and control of the print environment, securing that environment and eliminating unauthorised access to confidential documents and sensitive information? With us we will analyse together how to optimize the available resources to minimize down time or costs.',
      imgURL: null,
    },
    {
      heading:
        'So how can I better manage my print infrastructure to support business growth?',
      imgURL: null,
      text: 'Having discrete, disconnected printers from a number of suppliers increases costs, security issues and business efficiency. Often, businesses don’t appreciate how many printers they’re running and the effect of this. In the first instance, a print fleet audit establishes what equipment you have and where. It’s the first step in putting together an integrated print infrastructure that can be proactively managed. This enables you to make tangible process improvements that increase accountability and control.',
    },
  ];
  const officeSolutionsTitle = "حلول مكتبية";
  const officeSolutoinsParagraphs = [
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      listTitle: 'نقدم مجموعة واسعة من المنتجات والخدمات لتناسب جميع سير عمل شركتك',
      listItems: ['أنظمة المكاتب', 'في محادثة شخصية ، سنكتشف معًا الطابعة الأفضل بالنسبة لك والتي تلبي جميع متطلباتك', 'مزيج من أنظمة الطباعة والبرمجيات'],
    },
  ];
  const officePrinterTitle = "طابعات مكتبية";
  // const officePrintersParagraphs = ["Office printers adapt to very different requirements. Use this printer for a small office to an open plan office or even production environments.", "Hallmarks of office printers are their high speed, high print quality and low running costs.", "We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.", "We also accompany you from the consultation to the installation and setup of the printer. Of course, you will receive precise and understandable training from us so that you can use the full potential of the printer."];
  const officePrintersParagraphs2 = [
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      // listTitle: 'We provide wide range of products and services to fit all your company\'s workflow',
      listItems: ['طابعات مكتبية تتكيف مع متطلبات مختلفة للغاية. استخدم هذه الطابعة لمكتب صغير لمكتب مخطط مفتوح أو حتى بيئات إنتاج',
        'تتمثل السمات المميزة للطابعات المكتبية في السرعة العالية وجودة الطباعة العالية وتكاليف التشغيل المنخفضة.',
        'سنكون سعداء لمساعدتك وسنجد معًا الطابعة المكتبية المثالية التي تلبي متطلباتك',
        'نرافقك أيضًا من الاستشارة إلى تثبيت الطابعة وإعدادها. بالطبع ، سوف تتلقى تدريبًا دقيقًا ومفهومًا منا حتى تتمكن من استخدام الإمكانات الكاملة للطابعة'],
    },
  ];
  const multiFunctionTitle = "نظام متعدد الوظائف";
  const multiFunctionParagraph = [
    {
      // heading: 'نظام متعدد الوظائف (نسخ ، طباعة ، مسح ضوئي)',
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `Enjoy the benefits of a multifunction system. Whether as a single device or network printer, nothing is left to be desired. They are fast, productive and above all user-friendly. In addition, they deliver high-quality printing in cost-effective color printing. We will be happy to advise you and together we will find the ideal multifunction printer that meets your wishes and requirements.`,
      isBullet: true,
      listTitle: 'نظام متعدد الوظائف (نسخ ، طباعة ، مسح ضوئي)',
      listItems: ['سريع ومنتج وسهل الاستخدام', 'يعمل كجهاز واحد أو طابعة شبكة', 'سنكون سعداء لمساعدتك وسنجد معًا الطابعة المكتبية المثالية التي تلبي متطلباتك', 'طباعة عالية الجودة وفعالة من حيث التكلفة'],
    },
  ]

  return (
    <div className="analysis-and-advice-main-div">
      <Article2_AR
        articleTitle={officeSolutionsTitle}
        articleParagraphs={officeSolutoinsParagraphs}
      />
      <Article2_AR
        articleTitle={officePrinterTitle}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={officePrintersParagraphs2}
      />
      <Article3_AR articleTitle={multiFunctionTitle} articleImage={articleImageURL} articleImageAltText="triumph adler printer" articleParagraphs={multiFunctionParagraph}></Article3_AR>

      {/* <Article2_AR
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      />
      <Article3_AR
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      />
      <Article3_AR
        articleTitle={articleTitle_1}
        articleParagraphs={articleParagraphs_1}
      />
      <Article2_AR
        articleTitle={articleTitle_1}
        articleParagraphs={articleParagraphs_1}
      /> */}
      {/* <div
        style={{
          width: '100%',
          height: '7vh',
          minHeight: '20px',
          backgroundColor: 'transparent',
        }}
      ></div> */}
    </div>
  );
}
