// ==UserScript==
// @name         LiveDigital Custom Themes
// @namespace    http://livedigital.space/
// @version      3.1
// @description  Custom themes for LiveDigital platform
// @author       Your Name
// @match        https://edu.livedigital.space/room/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=livedigital.space
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        STORAGE_KEY: 'ld_custom_theme_v3',
        STYLE_ID: 'ld-theme-style-v3',
        UI_ID: 'ld-theme-ui-v3',
        TOGGLE_ID: 'ld-theme-toggle-v3',
        VERSION: '3.1'
    };

    // Theme Definitions
    const THEMES = {
        "dark-red": {
            name: "Тёмно-красный",
            colors: {
                bg: "#6e0707ff",
                panel: "#9b0202ff",
                tile: "#241010",
                chat: "#b60000ff",
                accent: "#c50000ff",
                text: "#f3eaea",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        "dark-blue": {
            name: "Тёмно-синий",
            colors: {
                bg: "#0a0f1a",
                panel: "#0d1420",
                tile: "#101a2a",
                chat: "#090f19",
                accent: "#3466c0",
                text: "#eaeff3",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        "dark-green": {
            name: "Тёмно-зелёный",
            colors: {
                bg: "#0a1a0f",
                panel: "#0d2014",
                tile: "#102a1a",
                chat: "#09190f",
                accent: "#34c066",
                text: "#eaf3ee",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        "purple": {
            name: "Фиолетовый",
            colors: {
                bg: "#0a0a1a",
                panel: "#0d0d20",
                tile: "#10102a",
                chat: "#090919",
                accent: "#6634c0",
                text: "#eaeaf3",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        "orange": {
            name: "Оранжевый",
            colors: {
                bg: "#1a0f0a",
                panel: "#20140d",
                tile: "#2a1a10",
                chat: "#190f09",
                accent: "#c07634",
                text: "#f3edea",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        "cyberpunk": {
            name: "Киберпанк",
            colors: {
                bg: "#0a0a14",
                panel: "#14142a",
                tile: "#1a1a33",
                chat: "#0d0d19",
                accent: "#00ff9d",
                text: "#e6e6ff",
                success: "#00ff9d",
                warning: "#ffaa00",
                error: "#ff0066"
            }
        },
        "midnight": {
            name: "Полночь",
            colors: {
                bg: "#050510",
                panel: "#0a0a1a",
                tile: "#0f0f25",
                chat: "#080814",
                accent: "#8a2be2",
                text: "#e0e0ff",
                success: "#00ff88",
                warning: "#ffaa00",
                error: "#ff3366"
            }
        },
        "amoled": {
            name: "Тёмный режим",
            colors: {
                bg: "#414141ff",
                panel: "#505050ff",
                tile: "#9b9b9bff",
                chat: "#424242ff",
                accent: "#424242ff",
                text: "#ffffffff",
                success: "#00ff00",
                warning: "#ffff00",
                error: "#ff0000"
            }
        },
        "light-mode": {
            name: "Светлый режим",
            colors: {
                bg: "#f5f5f5",
                panel: "#ffffff",
                tile: "#fafafa",
                chat: "#f0f0f0",
                accent: "#5a6494ff",
                text: "#ffffffff",
                success: "#4CAF50",
                warning: "#FF9800",
                error: "#F44336"
            }
        },
        // Новые темы
        "pink": {
            name: "Розовая",
            colors: {
                bg: "#1a0a14",
                panel: "#2d0d24",
                tile: "#3a1030",
                chat: "#24091c",
                accent: "#ff66b2",
                text: "#ffe6f2",
                success: "#ff66cc",
                warning: "#ff9966",
                error: "#ff3366"
            }
        },
        "hello-kitty": {
            name: "Hello Kitty",
            colors: {
                bg: "#fff0f5",
                panel: "#ffe6f2",
                tile: "#ffccdd",
                chat: "#ffb3cc",
                accent: "#ff66b2",
                text: "#660033",
                success: "#ff66cc",
                warning: "#ff9966",
                error: "#ff3366"
            },
            background: "url('https://s5.iimage.su/s/23/gugneDlx4rIyfpFTrHAVs05QiT8fZ8jdt4ZBkZ9L.png') no-repeat center center fixed",
            backgroundSize: "cover"
        },
        "yellow": {
            name: "Песочный",
            colors: {
                bg: "#1a140a",
                panel: "#2d2410",
                tile: "#3a2d14",
                chat: "#241c09",
                accent: "#ffcc66",
                text: "#fff2cc",
                success: "#cc9900",
                warning: "#ff9900",
                error: "#cc6600"
            }
        },
        "berserk": {
            name: "Берсерк",
            colors: {
                bg: "#000000",
                panel: "#111111",
                tile: "#1a1a1a",
                chat: "#0a0a0a",
                accent: "#cc0000",
                text: "#ffffff",
                success: "#ff0000",
                warning: "#ff3300",
                error: "#990000"
            },
            background: "url('https://s5.iimage.su/s/23/g70I107xAcFNv6Ef1jyiJs1KAS4KcYGNurrSCoNU.png') no-repeat center center fixed",
            backgroundSize: "cover"
        },
        "matrix": {
            name: "MATRIX",
            colors: {
                bg: "#004b00ff",
                panel: "#0a0a0a",
                tile: "#25bb00ff",
                chat: "#144106ff",
                accent: "#00ff00ff",
                text: "#000000ff",
                success: "#00ff00",
                warning: "#00cc00",
                error: "#009900"
            }
        },
        "beige": {
            name: "Бежевый",
            colors: {
                bg: "#1a1814",
                panel: "#2d2a24",
                tile: "#3a362d",
                chat: "#242119",
                accent: "#d2b48c",
                text: "#000000ff",
                success: "#a0522d",
                warning: "#cd853f",
                error: "#8b4513"
            }
        },
        "cats": {
            name: "CATS",
            colors: {
                bg: "#1a1814",
                panel: "rgba(45, 42, 36, 0.8)",
                tile: "rgba(58, 54, 45, 0.8)",
                chat: "rgba(36, 33, 25, 0.8)",
                accent: "#d2b48c",
                text: "#f5f5dc",
                success: "#a0522d",
                warning: "#cd853f",
                error: "#8b4513"
            },
            background: "url('https://s5.iimage.su/s/23/giXOt2TxIPc8CJaeoZqnhhBM8BjBLDaFbz9HHUjS.png') no-repeat center center fixed",
            backgroundSize: "cover"
        }
    };

    // State management
    let state = {
        enabled: false,
        theme: null
    };

    // DOM Elements cache
    let elements = {
        panel: null,
        toggle: null,
        list: null,
        checkbox: null,
        closeBtn: null,
        applyBtn: null,
        resetBtn: null
    };

    // Initialize
    function init() {
        console.log(`LiveDigital Themes v${CONFIG.VERSION} initializing...`);
        
        // Load state from storage
        loadState();
        
        // Create UI elements
        createUI();
        
        // Apply theme if enabled
        if (state.enabled && state.theme) {
            applyTheme(state.theme);
        }
        
        // Setup event listeners
        setupEventListeners();
        
        // Setup mutation observer
        setupMutationObserver();
        
        console.log(`LiveDigital Themes v${CONFIG.VERSION} initialized successfully`);
    }

    // Storage functions
    function saveState() {
        try {
            if (typeof GM_setValue === 'function') {
                GM_setValue(CONFIG.STORAGE_KEY, JSON.stringify(state));
            } else {
                localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(state));
            }
        } catch (e) {
            console.error('Failed to save state:', e);
        }
    }

    function loadState() {
        try {
            let stored;
            if (typeof GM_getValue === 'function') {
                stored = GM_getValue(CONFIG.STORAGE_KEY);
            } else {
                stored = localStorage.getItem(CONFIG.STORAGE_KEY);
            }
            
            if (stored) {
                const parsed = JSON.parse(stored);
                state = { ...state, ...parsed };
            }
        } catch (e) {
            console.error('Failed to load state:', e);
        }
    }

    // UI Creation
    function createUI() {
        // Create panel
        elements.panel = document.createElement('div');
        elements.panel.id = CONFIG.UI_ID;
        elements.panel.innerHTML = `
            <div class="ld-panel" role="dialog" aria-label="Темы оформления">
                <div class="ld-header">
                    <div class="ld-title">
                        <span>🎨 Темы оформления</span>
                        <span class="ld-version">v${CONFIG.VERSION}</span>
                    </div>
                    <div class="ld-close" title="Закрыть">✕</div>
                </div>
                <div class="ld-search">
                    <input type="text" placeholder="Поиск тем..." class="ld-search-input">
                </div>
                <div class="ld-list"></div>
                <div class="ld-controls">
                    <label class="ld-switch">
                        <input type="checkbox" id="ld-enable" ${state.enabled ? 'checked' : ''}>
                        <span class="ld-slider"></span>
                        <span class="ld-label">Включить тему</span>
                    </label>
                    <div class="ld-actions">
                        <button class="ld-btn ld-btn-secondary ld-reset">Сбросить</button>
                        <button class="ld-btn ld-btn-primary ld-apply">Применить</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(elements.panel);

        // Create toggle button
        elements.toggle = document.createElement('div');
        elements.toggle.id = CONFIG.TOGGLE_ID;
        elements.toggle.title = 'Темы оформления:';
        elements.toggle.innerHTML = '🎨';
        document.body.appendChild(elements.toggle);

        // Cache elements
        elements.list = elements.panel.querySelector('.ld-list');
        elements.checkbox = elements.panel.querySelector('#ld-enable');
        elements.closeBtn = elements.panel.querySelector('.ld-close');
        elements.applyBtn = elements.panel.querySelector('.ld-apply');
        elements.resetBtn = elements.panel.querySelector('.ld-reset');
        
        // Create theme items
        createThemeItems();
        
        // Apply UI styles
        applyUIStyles();
    }

    function createThemeItems() {
        elements.list.innerHTML = '';
        
        // Add predefined themes
        Object.entries(THEMES).forEach(([id, theme]) => {
            const item = document.createElement('div');
            item.className = `ld-theme-item ${state.theme === id ? 'ld-selected' : ''}`;
            item.dataset.themeId = id;
            
            const accentColor = theme.colors.accent;
            item.innerHTML = `
                <div class="ld-theme-preview" style="background: linear-gradient(135deg, ${theme.colors.bg} 0%, ${theme.colors.panel} 100%);">
                    <div class="ld-theme-sample" style="background-color: ${theme.colors.tile};"></div>
                    <div class="ld-theme-sample" style="background-color: ${theme.colors.accent};"></div>
                    <div class="ld-theme-sample" style="background-color: ${theme.colors.chat};"></div>
                </div>
                <div class="ld-theme-info">
                    <div class="ld-theme-name">${theme.name}</div>
                    <div class="ld-theme-colors">
                        <span class="ld-color-dot" style="background-color: ${theme.colors.bg}"></span>
                        <span class="ld-color-dot" style="background-color: ${theme.colors.accent}"></span>
                        <span class="ld-color-dot" style="background-color: ${theme.colors.text}"></span>
                    </div>
                </div>
                <div class="ld-theme-select">
                    <div class="ld-select-indicator"></div>
                </div>
            `;
            
            item.addEventListener('click', () => {
                document.querySelectorAll('.ld-theme-item').forEach(el => el.classList.remove('ld-selected'));
                item.classList.add('ld-selected');
                state.theme = id;
                
                if (elements.checkbox.checked) {
                    applyTheme(id);
                }
            });
            
            elements.list.appendChild(item);
        });
    }

    function applyUIStyles() {
        const styles = `
            /* Main Panel */
            #${CONFIG.UI_ID} {
                position: fixed;
                right: 20px;
                top: 80px;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                display: none;
            }
            
            .ld-panel {
                width: 320px;
                background: rgba(21, 0, 80, 0.98);
                backdrop-filter: blur(20px);
                border-radius: 16px;
                padding: 20px;
                color: #fff;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
                border: 1px solid rgba(255, 255, 255, 0.1);
                animation: ld-panel-appear 0.3s ease;
            }
            
            @keyframes ld-panel-appear {
                from {
                    opacity: 0;
                    transform: translateY(-10px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .ld-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
            }
            
            .ld-title {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 18px;
                font-weight: 600;
            }
            
            .ld-version {
                font-size: 12px;
                opacity: 0.6;
                background: rgba(255, 255, 255, 0.1);
                padding: 2px 6px;
                border-radius: 10px;
            }
            
            .ld-close {
                cursor: pointer;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.05);
                transition: all 0.2s ease;
            }
            
            .ld-close:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: rotate(90deg);
            }
            
            .ld-search {
                margin-bottom: 16px;
            }
            
            .ld-search-input {
                width: 100%;
                padding: 10px 14px;
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: rgba(255, 255, 255, 0.05);
                color: #fff;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            
            .ld-search-input:focus {
                outline: none;
                border-color: rgba(255, 255, 255, 0.3);
                background: rgba(255, 255, 255, 0.08);
            }
            
            .ld-list {
                max-height: 400px;
                overflow-y: auto;
                margin-bottom: 16px;
                padding-right: 4px;
            }
            
            .ld-list::-webkit-scrollbar {
                width: 6px;
            }
            
            .ld-list::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 3px;
            }
            
            .ld-list::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 3px;
            }
            
            .ld-theme-item {
                display: flex;
                align-items: center;
                padding: 12px;
                border-radius: 12px;
                margin-bottom: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid transparent;
            }
            
            .ld-theme-item:hover {
                background: rgba(255, 255, 255, 0.06);
                transform: translateX(4px);
            }
            
            .ld-theme-item.ld-selected {
                background: rgba(255, 255, 255, 0.08);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            }
            
            .ld-theme-preview {
                width: 48px;
                height: 48px;
                border-radius: 10px;
                margin-right: 12px;
                display: flex;
                flex-wrap: wrap;
                padding: 4px;
                gap: 2px;
                overflow: hidden;
            }
            
            .ld-theme-sample {
                width: calc(50% - 1px);
                height: calc(50% - 1px);
                border-radius: 4px;
            }
            
            .ld-theme-info {
                flex: 1;
            }
            
            .ld-theme-name {
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 4px;
            }
            
            .ld-theme-colors {
                display: flex;
                gap: 4px;
            }
            
            .ld-color-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .ld-theme-select {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .ld-select-indicator {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transition: all 0.2s ease;
            }
            
            .ld-theme-item.ld-selected .ld-select-indicator {
                background: #fff;
                box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
            }
            
            .ld-controls {
                padding-top: 16px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .ld-switch {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                cursor: pointer;
                user-select: none;
            }
            
            .ld-switch input {
                display: none;
            }
            
            .ld-slider {
                position: relative;
                width: 44px;
                height: 24px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                margin-right: 10px;
                transition: all 0.3s ease;
            }
            
            .ld-slider:before {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                left: 2px;
                top: 2px;
                background: #fff;
                border-radius: 50%;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            .ld-switch input:checked + .ld-slider {
                background: #6ee072ff;
            }
            
            .ld-switch input:checked + .ld-slider:before {
                transform: translateX(20px);
            }
            
            .ld-label {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.9);
            }
            
            .ld-actions {
                display: flex;
                gap: 10px;
            }
            
            .ld-btn {
                flex: 1;
                padding: 10px 16px;
                border-radius: 10px;
                border: none;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: center;
            }
            
            .ld-btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            .ld-btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
            }
            
            .ld-btn-secondary {
                background: rgba(255, 255, 255, 0.1);
                color: rgba(255, 255, 255, 0.9);
            }
            
            .ld-btn-secondary:hover {
                background: rgba(255, 255, 255, 0.15);
            }
            
            /* Toggle Button */
            #${CONFIG.TOGGLE_ID} {
                position: fixed;
                right: 20px;
                top: 20px;
                z-index: 999998;
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #fff;
                box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
                cursor: pointer;
                font-size: 20px;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            #${CONFIG.TOGGLE_ID}:hover {
                transform: translateY(-4px) scale(1.05);
                box-shadow: 0 12px 40px rgba(102, 126, 234, 0.5);
            }
            
            /* Mobile responsiveness */
            @media (max-width: 768px) {
                .ld-panel {
                    width: calc(100vw - 40px);
                    right: 20px;
                    left: 20px;
                    top: 80px;
                }
                
                #${CONFIG.TOGGLE_ID} {
                    width: 44px;
                    height: 44px;
                    right: 16px;
                    top: 16px;
                }
            }
            
            /* Dark theme for panel */
            @media (prefers-color-scheme: dark) {
                .ld-panel {
                    background: rgba(71, 71, 71, 0.98);
                }
            }
        `;
        
        if (typeof GM_addStyle === 'function') {
            GM_addStyle(styles);
        } else {
            const style = document.createElement('style');
            style.textContent = styles;
            document.head.appendChild(style);
        }
    }

    // Theme Application
    function applyTheme(themeId) {
        const theme = THEMES[themeId];
        if (!theme) return;
        
        // Remove existing theme
        removeTheme();
        
        // Create new theme styles
        const css = generateThemeCSS(theme);
        injectTheme(css);
        
        // Update state
        state.enabled = true;
        state.theme = themeId;
        saveState();
        
        // Update UI
        elements.checkbox.checked = true;
        updateThemeItems();
        
        console.log(`Applied theme: ${theme.name}`);
    }

    function generateThemeCSS(theme) {
        const colors = theme.colors;
        const background = theme.background || colors.bg;
        const backgroundSize = theme.backgroundSize || 'auto';
        
        return `
            /* LiveDigital Custom Theme v${CONFIG.VERSION} */
            
            /* Root variables */
            :root {
                --ld-bg: ${colors.bg} !important;
                --ld-panel: ${colors.panel} !important;
                --ld-tile: ${colors.tile} !important;
                --ld-chat: ${colors.chat} !important;
                --ld-accent: ${colors.accent} !important;
                --ld-text: ${colors.text} !important;
                --ld-success: ${colors.success} !important;
                --ld-warning: ${colors.warning} !important;
                --ld-error: ${colors.error} !important;
                
                color-scheme: dark;
            }
            
            /* Global styles */
            html, body {
                background: ${background} !important;
                background-size: ${backgroundSize} !important;
                color: var(--ld-text) !important;
                transition: background-color 0.3s ease, color 0.3s ease;
            }
            
            #root {
                background: ${colors.bg} !important;
                color: var(--ld-text) !important;
            }
            
            /* Header and navigation */
            [data-id*="header"], 
            [class*="header"],
            [role="banner"],
            [role="navigation"] {
                background: var(--ld-panel) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            /* Control panels */
            #control-panel,
            [data-id*="ControlPanel"],
            [class*="control-panel"] {
                background: var(--ld-panel) !important;
                border-color: rgba(255, 255, 255, 0.1) !important;
            }
            
            /* Reaction buttons */
            [data-id="ReactionsView-index-ReactionsBlock"],
            #heart-icon-button,
            #thumb-up-icon-button,
            #thumb-down-icon-button,
            #fire-icon-button,
            #raise-hand-icon-button {
                background: var(--ld-tile) !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 8px !important;
                transition: all 0.2s ease !important;
            }
            
            #heart-icon-button:hover,
            #thumb-up-icon-button:hover,
            #thumb-down-icon-button:hover,
            #fire-icon-button:hover,
            #raise-hand-icon-button:hover {
                background: var(--ld-accent) !important;
                border-color: var(--ld-accent) !important;
                transform: scale(1.05) !important;
            }
            
            /* Chat messages */
            [data-qa="chat-msg"],
            .Message-message-58,
            [class*="Message-message-"] {
                background: rgba(255, 255, 255, 0.05) !important;
                border-radius: 8px !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }
            
            /* User avatars */
            .MuiAvatar-root {
                background: var(--ld-accent) !important;
                color: var(--ld-text) !important;
            }
            
            /* Buttons */
            button:not([disabled]) {
                background: var(--ld-accent) !important;
                color: var(--ld-text) !important;
                border-color: var(--ld-accent) !important;
                transition: all 0.2s ease !important;
            }
            
            button:not([disabled]):hover {
                background: ${adjustColor(colors.accent, 20)} !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
            }
            
            /* Links */
            a {
                color: var(--ld-accent) !important;
                transition: color 0.2s ease !important;
            }
            
            a:hover {
                color: ${adjustColor(colors.accent, 20)} !important;
            }
            
            /* Inputs */
            input, textarea, select {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                color: var(--ld-text) !important;
            }
            
            input:focus, textarea:focus, select:focus {
                border-color: var(--ld-accent) !important;
                box-shadow: 0 0 0 2px ${adjustColor(colors.accent, 20, 0.2)} !important;
            }
            
            /* Scrollbars */
            ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
            }
            
            ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
            }
            
            ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 5px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            
            /* Selection */
            ::selection {
                background: ${adjustColor(colors.accent, 0, 0.3)} !important;
                color: var(--ld-text) !important;
            }
            
            /* Focus outline */
            :focus-visible {
                outline: 2px solid var(--ld-accent) !important;
                outline-offset: 2px !important;
            }
            
            /* Transitions */
            * {
                transition: background-color 0.3s ease, 
                          border-color 0.3s ease, 
                          color 0.3s ease !important;
            }
        `;
    }

    function injectTheme(css) {
        // Remove existing style
        const existing = document.getElementById(CONFIG.STYLE_ID);
        if (existing) existing.remove();
        
        // Create new style element
        const style = document.createElement('style');
        style.id = CONFIG.STYLE_ID;
        style.textContent = css;
        document.head.appendChild(style);
    }

    function removeTheme() {
        const style = document.getElementById(CONFIG.STYLE_ID);
        if (style) style.remove();
        
        state.enabled = false;
        state.theme = null;
        saveState();
        
        elements.checkbox.checked = false;
        updateThemeItems();
    }

    // Helper functions
    function adjustColor(color, percent, alpha = 1) {
        if (color.startsWith('rgba') || color.startsWith('rgb')) {
            return color;
        }
        
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, Math.max(0, (num >> 16) + amt));
        const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
        const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
        
        if (alpha < 1) {
            return `rgba(${R}, ${G}, ${B}, ${alpha})`;
        }
        
        return '#' + (
            0x1000000 +
            (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)
        ).toString(16).slice(1);
    }

    function updateThemeItems() {
        document.querySelectorAll('.ld-theme-item').forEach(item => {
            const themeId = item.dataset.themeId;
            if (state.theme === themeId) {
                item.classList.add('ld-selected');
            } else {
                item.classList.remove('ld-selected');
            }
        });
    }

    // Event Listeners
    function setupEventListeners() {
        // Toggle button
        elements.toggle.addEventListener('click', () => {
            const currentDisplay = elements.panel.style.display;
            elements.panel.style.display = currentDisplay === 'none' ? 'block' : 'none';
        });
        
        // Close button
        elements.closeBtn.addEventListener('click', () => {
            elements.panel.style.display = 'none';
        });
        
        // Apply button
        elements.applyBtn.addEventListener('click', () => {
            if (state.theme) {
                applyTheme(state.theme);
            }
        });
        
        // Reset button
        elements.resetBtn.addEventListener('click', () => {
            removeTheme();
        });
        
        // Enable/disable checkbox
        elements.checkbox.addEventListener('change', () => {
            if (elements.checkbox.checked && state.theme) {
                applyTheme(state.theme);
            } else {
                removeTheme();
            }
        });
        
        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!elements.panel.contains(e.target) && 
                !elements.toggle.contains(e.target) && 
                elements.panel.style.display !== 'none') {
                elements.panel.style.display = 'none';
            }
        });
        
        // Search functionality
        const searchInput = elements.panel.querySelector('.ld-search-input');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.ld-theme-item').forEach(item => {
                const themeName = item.querySelector('.ld-theme-name').textContent.toLowerCase();
                item.style.display = themeName.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    // Mutation Observer
    function setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            // Check if our style was removed
            mutations.forEach(mutation => {
                mutation.removedNodes.forEach(node => {
                    if (node.id === CONFIG.STYLE_ID && state.enabled && state.theme) {
                        // Re-apply theme if it was removed
                        setTimeout(() => applyTheme(state.theme), 100);
                    }
                });
            });
        });
        
        observer.observe(document.head, { childList: true });
    }

    // Initialize when page is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();