const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;
  
  const exBytes = await fetch("./Colorful Modern Geometric Certificate of Participation.pdf").then((res) => { 
    return res.arrayBuffer();
  });
  
  const exFont = await fetch("./Sanchez-Regular.ttf").then(res => {
    return res.arrayBuffer()
  })
  

  

  
  
const pdfDoc = await PDFDocument.load(exBytes)

  pdfDoc.resgisterFontkit(fontKit);
  const myFont = await pdfDoc.embedFont(exFont);
  
  const pages = pdfDoc.getPages();
  const firstPg = pages[0]
  
  firstPg.drawText(name,{
    x: 300,
    y: 270,
    size: 58,
  })

const uri = await pdfDoc.saveAsBase64({dataUri: true})

document.querySelector("#mypdf").src = uri;
};

generatePDF("Harsh Sharma")