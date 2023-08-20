<script>
  document.addEventListener("DOMContentLoaded", function() {
    const educationCards = document.querySelectorAll('.education-card');

    educationCards.forEach(card => {
      card.addEventListener('mouseover', () => {
        // Add animation or style changes on hover
        card.classList.add('hovered');
      })

      card.addEventListener('mouseout', () => {
        // Reset styles on mouseout
        card.classList.remove('hovered');
      });
    });
  });
</script>
