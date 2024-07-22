export interface CalendlyPopupWidgetOptionsPrefill {
  email?: string;
  name?: string;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        prefill?: CalendlyPopupWidgetOptionsPrefill;
        url: string;
      }) => void;
    };
  }
}

export default function useCalendly({
  calendlyLink,
  prefill,
}: {
  calendlyLink: string;
  prefill?: CalendlyPopupWidgetOptionsPrefill;
}) {
  return () => {
    window.Calendly.initPopupWidget({ prefill, url: calendlyLink });
  };
}
