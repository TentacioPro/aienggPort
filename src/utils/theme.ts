// Theme management utility for dynamic theme switching
export type Theme = 'tech' | 'bold' | 'industrial';
export type Mode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';
const MODE_STORAGE_KEY = 'portfolio-mode';

// Default theme and mode
const DEFAULT_THEME: Theme = 'tech';
const DEFAULT_MODE: Mode = 'dark';

/**
 * Get the currently active theme from localStorage or default
 */
export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return (stored as Theme) || DEFAULT_THEME;
};

/**
 * Get the currently active mode from localStorage or default
 */
export const getStoredMode = (): Mode => {
  if (typeof window === 'undefined') return DEFAULT_MODE;
  const stored = localStorage.getItem(MODE_STORAGE_KEY);
  return (stored as Mode) || DEFAULT_MODE;
};

/**
 * Set theme and update DOM + localStorage
 */
export const setTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  const body = document.body;

  // Remove all theme classes from both root and body
  root.classList.remove('theme-tech', 'theme-bold', 'theme-industrial');
  body.classList.remove('theme-tech', 'theme-bold', 'theme-industrial');

  // Add new theme class to both
  root.classList.add(`theme-${theme}`);
  body.classList.add(`theme-${theme}`);

  // Force CSS variable recalculation by triggering a reflow
  void root.offsetHeight;

  // Persist to localStorage
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

/**
 * Toggle or set mode and update DOM + localStorage
 */
export const setMode = (mode: Mode): void => {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  const body = document.body;

  // Remove both mode classes from root and body
  root.classList.remove('mode-light', 'mode-dark');
  body.classList.remove('mode-light', 'mode-dark');

  // Add new mode class to both
  root.classList.add(`mode-${mode}`);
  body.classList.add(`mode-${mode}`);

  // Force CSS variable recalculation by triggering a reflow
  void root.offsetHeight;

  // Persist to localStorage
  localStorage.setItem(MODE_STORAGE_KEY, mode);
};

/**
 * Toggle between light and dark modes
 */
export const toggleMode = (): Mode => {
  const currentMode = getStoredMode();
  const newMode: Mode = currentMode === 'light' ? 'dark' : 'light';
  setMode(newMode);
  return newMode;
};

/**
 * Initialize theme on page load
 */
export const initializeTheme = (): void => {
  if (typeof window === 'undefined') return;

  const theme = getStoredTheme();
  const mode = getStoredMode();

  const root = document.documentElement;
  const body = document.body;

  // Apply theme classes to both root and body
  root.classList.add(`theme-${theme}`, `mode-${mode}`);
  body.classList.add(`theme-${theme}`, `mode-${mode}`);

  // Force CSS variable recalculation
  void root.offsetHeight;
};

/**
 * Get all available themes
 */
export const getAllThemes = (): Array<{ id: Theme; label: string }> => [
  { id: 'tech', label: 'Tech Interface' },
  { id: 'bold', label: 'Bold Energy' },
  { id: 'industrial', label: 'Industrial Futurist' },
];
