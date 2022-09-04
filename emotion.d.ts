import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    spacing: {
      'spacing-1': string;
      'spacing-2': string;
      'spacing-3': string;
      'spacing-4': string;
      'spacing-5': string;
      'spacing-6': string;
    };

    theme: {
      spacing: spacing;
    };
  }
}
