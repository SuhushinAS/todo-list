import {appPath} from 'app/lib/constants';
import {store} from 'app/model/store';
import {Board} from 'modules/board/components/Board';
import {Config} from 'modules/config/components/Config';
import {FirebaseProvider} from 'modules/firebase/components/Firebase';
import {Layout} from 'modules/layout/components/Layout';
import {LocaleProvider} from 'modules/locale/components/LocaleProvider';
import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <LocaleProvider>
          <HashRouter>
            <Config>
              <Layout>
                <FirebaseProvider>
                  <Routes>
                    <Route element={<Board />} path={`${appPath.home}*`} />
                  </Routes>
                </FirebaseProvider>
              </Layout>
            </Config>
          </HashRouter>
        </LocaleProvider>
      </Provider>
    </React.StrictMode>
  );
};
