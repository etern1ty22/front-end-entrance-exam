import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function downloadResume(index) {
  const element = document.querySelectorAll('.bentoFlexbox')[index];

  html2canvas(element, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
    pdf.save(`resume_${index + 1}.pdf`);
  });
}
window.downloadResume = downloadResume;