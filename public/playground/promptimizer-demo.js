/**
 * Promptimizer Demo for Easter Egg
 * A simple demo of Noah's Promptimizer project that will be shown when the Konami code is entered
 */

// Initialize the Promptimizer demo
window.initPromptimizer = function(container) {
  if (!container) return;
  
  // Create the demo UI
  const demoUI = document.createElement('div');
  demoUI.className = 'promptimizer-ui';
  demoUI.innerHTML = `
    <div class="mb-6">
      <p class="mb-4">This is a simplified demo of Promptimizer, a tool for optimizing AI prompts.</p>
      <div class="mb-4">
        <label for="prompt-input" class="block text-sm font-medium mb-2">Enter your prompt:</label>
        <textarea id="prompt-input" rows="4" class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" placeholder="Write your prompt here...">Create a landing page for a fitness app that helps users track their workout routines.</textarea>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Optimization target:</label>
        <div class="flex flex-wrap gap-3">
          <button class="optimization-btn px-3 py-1 border rounded-md hover:bg-primary hover:text-white transition-colors" data-type="clarity">Clarity</button>
          <button class="optimization-btn px-3 py-1 border rounded-md hover:bg-primary hover:text-white transition-colors" data-type="specificity">Specificity</button>
          <button class="optimization-btn px-3 py-1 border rounded-md hover:bg-primary hover:text-white transition-colors" data-type="conciseness">Conciseness</button>
        </div>
      </div>
      <button id="optimize-btn" class="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition-all">Optimize Prompt</button>
    </div>
    
    <div id="result-container" class="hidden border-t pt-4 mt-4">
      <h3 class="font-bold text-lg mb-2">Optimized Prompt:</h3>
      <div id="optimized-result" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-md"></div>
    </div>
  `;
  
  container.appendChild(demoUI);
  
  // Add event listeners
  const promptInput = demoUI.querySelector('#prompt-input');
  const optimizeBtn = demoUI.querySelector('#optimize-btn');
  const resultContainer = demoUI.querySelector('#result-container');
  const optimizedResult = demoUI.querySelector('#optimized-result');
  const optimizationBtns = demoUI.querySelectorAll('.optimization-btn');
  
  let selectedOptimization = 'clarity';
  
  // Handle optimization type selection
  optimizationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      optimizationBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
      
      // Add active class to clicked button
      btn.classList.add('bg-primary', 'text-white');
      selectedOptimization = btn.dataset.type;
    });
  });
  
  // Set default active button
  optimizationBtns[0].classList.add('bg-primary', 'text-white');
  
  // Handle optimize button click
  optimizeBtn.addEventListener('click', () => {
    const prompt = promptInput.value.trim();
    
    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }
    
    // Simulate optimization with predefined improvements
    const optimized = optimizePrompt(prompt, selectedOptimization);
    
    // Display result
    resultContainer.classList.remove('hidden');
    optimizedResult.textContent = optimized;
  });
  
  // Simple prompt optimization function (simulated)
  function optimizePrompt(prompt, type) {
    const optimizations = {
      clarity: `Design a visually appealing and intuitive landing page for a fitness tracking application that enables users to record and monitor their workout routines. The page should clearly communicate the app's primary benefit of helping users track their fitness progress over time.`,
      
      specificity: `Create a responsive landing page for 'FitTrack Pro', a fitness app that helps users track their workout routines. Include:
1. A hero section with app screenshots showing the workout tracking interface
2. Feature highlights: routine creation, progress visualization, and workout reminders
3. Testimonials from users who improved their fitness
4. A clear CTA to download the app
5. Mobile and desktop optimized layouts`,
      
      conciseness: `Design a fitness app landing page featuring workout tracking functionality. Highlight the app's UI, core features, and include a prominent download button. Ensure responsive design.`
    };
    
    return optimizations[type] || prompt;
  }
};
