import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { AppModule } from './app.module';

storiesOf('App ', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        AppModule,
        RouterModule.forRoot(
          [
            {
              path: '',
              loadChildren: () =>
                import('./app.module').then((m) => m.AppModule),
            },
          ],
          {
            useHash: true,
          }
        ),
      ],
      providers: [{ prorvide: APP_BASE_HREF, useValue: '/' }],
    })
  )
  .add('default', () => ({
    template: `<router-outlet></router-outlet>`,
  }));
