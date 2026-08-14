import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Disable right-click context menu
  document.addEventListener('context menu', (e: MouseEvent): void => {
    e.preventDefault();
  });

  // Block keyboard shortcuts (Ctrl+C, Ctrl+P, Cmd+C, Cmd+P, Ctrl+U, F12)
  document.addEventListener('keydown', (e: KeyboardEvent): void => {
    const isCmdOrCtrl: boolean = e.ctrlKey || e.metaKey;
    const key: string = e.key.toLowerCase();

    // Block Ctrl/Cmd + C (Copy) and Ctrl/Cmd + P (Print)
    if (isCmdOrCtrl && (key === 'c' || key === 'p' || key === 'u')) {
      e.preventDefault();
    }

    // Optional: Block F12 (DevTools)
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });

  // Prevent copy & cut events explicitly
  document.addEventListener('copy', (e: ClipboardEvent): void => {
    e.preventDefault();
  });

  document.addEventListener('cut', (e: ClipboardEvent): void => {
    e.preventDefault();
  });
}

export {};