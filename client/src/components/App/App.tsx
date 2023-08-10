import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEMES } from '@constants/themes';
import { Route, Routes } from 'react-router-dom';
import Layout from '@hoc/Layout/Layout';
import MapPage from '@src/pages/MapPage/MapPage';
import LayoutWithoutContainer from '@hoc/Layout/LayoutWithoutContainer';
import InterviewPage from '@src/pages/InterviewPage/InterviewPage';
import CreateInterviewPage from '@src/pages/CreateInterviewPage/CreateInterviewPage';
import AdminLayout from '@hoc/AdminLayout/AdminLayout';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEMES.light}>
      <div className={styles.App}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/interviews' element={<InterviewPage/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='/admin/create-interview' element={<CreateInterviewPage/>}/>
          </Route>
          <Route path='/map' element={<LayoutWithoutContainer/>}>
            <Route path='/map' element={<MapPage/>}/>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};
