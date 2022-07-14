import React from 'react'
// import Article1 from '../../components/Article1/Article1'
import Article1_AR from '../../components/Article1/Article1_AR';

export default function DocumentManagement_AR() {
  const documentSolutionArticleTitle = 'إدارة الوثائق';
  const documentSolutionArticleParagraphs = [
    {
      heading: 'لماذا أحتاج إلى برنامج إدارة المستندات؟',
      text: '.ضع حدًا لأدراج الورق العديدة والمربكة. باستخدام برنامج حل المستندات المثبت ، يمكنك بسهولة مسح جميع مستنداتك وحفظها وإدارتها. لم نفقد أي شيء وتم تحسين العمليات التجارية',
    },
    {
      heading: 'لماذا مؤسسة النور للتجارة؟',
      text: '.تعد مؤسسة النور واحدة من الشركات القليلة في مصر التي تقدم حلًا متكاملًا بالكامل ، تم تصميمه خصيصًا لك بشكل فردي باستخدام أدوات مختلفة. بالنسبة للعملاء ، هذا يعني اليقين بأن وكيلهم المتخصص يتميز بالتزام خاص ومستوى عالٍ من الكفاءة. في السنوات الأخيرة ، تمكنت جمعية النور من كسب شركات معروفة كعملاء راضين عن حلول المستندات. من أجل أخذ هذا التطور في الاعتبار ، يتم إجراء استثمارات في التدريب المستمر',
    },
    {
      heading: 'التزامنا',
      text: '.سوف تساعدك مؤسسة النور في جميع الأسئلة المتعلقة ببرامج حلول المستندات المختلفة. يمكنك توقع مشورة مختصة ، بالإضافة إلى دعم وتكامل البرنامج في شركتك. بالطبع ، فريق الدعم المختص لدينا تحت تصرفك طوال المدة بأكملها'
    },
    {
      heading: '.للحصول على الحل الأمثل ولمزيد من المعلومات ، يسعدنا التحدث إليك شخصيًا'
    }
  ];
  return (
    <div>
      {/* <div className="analysis-and-advice-main-div"> */}
      <Article1_AR articleTitle={documentSolutionArticleTitle} articleParagraphs={documentSolutionArticleParagraphs} />
      {/* <p>Document Management EN</p> */}
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        {/* <Divider /> */}
      </div>
    </div>
  )
}
