import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      title1: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title2: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title3: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title4: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title5: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title6: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
    };

    spacing: {
      'spacing-1': string;
      'spacing-2': string;
      'spacing-3': string;
      'spacing-4': string;
      'spacing-5': string;
      'spacing-6': string;
    };

    theme: {
      fonts: fonts;
      spacing: spacing;
    };
  }
}
