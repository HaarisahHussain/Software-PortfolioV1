 // JavaScript to handle modal display
 const showProfileBtn = document.querySelector('.show-profile-btn');
 const modalOverlay = document.getElementById('modalOverlay');
 const closeBtn = document.getElementById('closeBtn');

 // Show the modal when the button is clicked
 showProfileBtn.addEventListener('click', () => {
   modalOverlay.style.display = 'flex'; // Show the modal
 });

 // Hide the modal when the close button is clicked
 closeBtn.addEventListener('click', () => {
   modalOverlay.style.display = 'none'; // Hide the modal
 });

 // Hide the modal when clicking outside of it
 modalOverlay.addEventListener('click', (event) => {
   if (event.target === modalOverlay) {
     modalOverlay.style.display = 'none';
   }


  });



    // JavaScript to handle modal display
 const showProfileBtnAscii = document.querySelector('.show-profile-btnAscii');
 const modalOverlayAscii = document.getElementById('modalOverlayAscii');
 const closeBtnAscii = document.getElementById('closeBtnAscii');

 // Show the modal when the button is clicked
 showProfileBtnAscii.addEventListener('click', () => {
   modalOverlayAscii.style.display = 'flex'; // Show the modal
 });

 // Hide the modal when the close button is clicked
 closeBtnAscii.addEventListener('click', () => {
   modalOverlayAscii.style.display = 'none'; // Hide the modal
 });

 // Hide the modal when clicking outside of it
 modalOverlayAscii.addEventListener('click', (event) => {
   if (event.target === modalOverlayAscii) {
     modalOverlayAscii.style.display = 'none';
   }
 });


