document.addEventListener('DOMContentLoaded', () => {
  let curWidth = document.documentElement.clientWidth;
  window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 1159 && curWidth > 1159) {
      document.location.reload();
    } else if (document.documentElement.clientWidth  > 1160 && curWidth <= 1160) {
      document.location.reload();
    }
    if(document.documentElement.clientWidth <= 749 && curWidth > 749) {
      document.location.reload();
    } else if (document.documentElement.clientWidth  > 749 && curWidth <= 749) {
      document.location.reload();
    }
    if(document.documentElement.clientWidth <= 642 && curWidth > 642) {
      document.location.reload();
    } else if (document.documentElement.clientWidth  > 642 && curWidth <= 642) {
      document.location.reload();
    }
  })
})