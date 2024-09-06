import { create } from "zustand";

const useStore = create((set) => ({
    status: false,
    language: null,
    constructionPageIsVisible: false,
    spinnerIsVisible: true,
    visibleContent: false,
    
    changeLanguage: (value) => {
        set({
            language: !value
        });
        localStorage.setItem("language", !value);
    },

    changeVisibility: () => {
        set({
          visibleContent: true,
        });
    },

    getStorage: () => {
        let languageStore = JSON.parse(localStorage.getItem("language"));
        const ln = navigator.language || navigator.userLanguage;

        if (languageStore === null) {
            let language = true;

            if (ln.includes("es")) {
                language = false;
            }
            localStorage.setItem("languague", language);
            languageStore = language;
        }

        set({
            language: languageStore,
        });
    }
}))

export default useStore;