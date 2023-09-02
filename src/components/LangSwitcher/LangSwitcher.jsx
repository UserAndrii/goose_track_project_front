import i18next from "i18next";

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
};

const LangSwitcher = () => {
  return (
    <div>
      {Object.keys(lngs).map(lng => (
        <button
          key={lng}
          style={{
            fontWeight: i18next.resolvedLanguage === lng ? 'bold' : 'normal',
          }}
          type="submit"
          onClick={() => i18next.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
