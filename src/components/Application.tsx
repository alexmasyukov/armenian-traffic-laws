import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import '../theme/grid/bootstrap-reboot.min.css';
import '../theme/grid/bootstrap-grid.min.css';
import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types.js';
import { ThemeProvider } from 'styled-components';
import { dark, light, Theme } from './../theme/theme';
import H1 from './MDXComponents/H1';
import AppSettingsPanel from './AppSettingsPanel/AppSettingsPanel';
import { AppSettingsProvider, UpdateFortSizeFunc } from '../context/AppSettings';
import { AppSettingsStore } from '../services/AppSettingsStore';
// import { GlobalStyles } from '../theme/globalStyles';
import { AppSettings } from '../../types.d';
import './Application.scss';
import { ReferenceProvider } from '../context/ReferenceContext';

const RoadMarkings = React.lazy(() => import('../pages/RoadMarkings/RoadMarkings'));

const Post1 = React.lazy(() => import('../content/post1.mdx'));
const Post2 = React.lazy(() => import('../content/post2.mdx'));
const Post3 = React.lazy(() => import('../content/post3.mdx'));
const Post4 = React.lazy(() => import('../content/post4.mdx'));
const Post5 = React.lazy(() => import('../content/post5.mdx'));
const Post6 = React.lazy(() => import('../content/post6.mdx'));
const Post7 = React.lazy(() => import('../content/post7.mdx'));
const Post8 = React.lazy(() => import('../content/post8.mdx'));
const Post9 = React.lazy(() => import('../content/post9.mdx'));
const Post10 = React.lazy(() => import('../content/post10.mdx'));
const Post11 = React.lazy(() => import('../content/post11.mdx'));
const Post12 = React.lazy(() => import('../content/post12.mdx'));
const Post13 = React.lazy(() => import('../content/post13.mdx'));
const Post14 = React.lazy(() => import('../content/post14.mdx'));
const Post15 = React.lazy(() => import('../content/post15.mdx'));
const Post16 = React.lazy(() => import('../content/post16.mdx'));
const Post17 = React.lazy(() => import('../content/post17.mdx'));
const Post18 = React.lazy(() => import('../content/post18.mdx'));
const Post19 = React.lazy(() => import('../content/post19.mdx'));
const Post20 = React.lazy(() => import('../content/post20.mdx'));
const Post21 = React.lazy(() => import('../content/post21.mdx'));

// import { icons } from './Icons';

const LoadingPost = () => {
  return <div />;
};

enum Page {
  RoadSigns = 'roadSigns',
  RoadMarkings = 'roadMarkings',
  TrafficRules = 'trafficRules',
}

const components: MDXComponents = {
  h1: H1,
  strong: (props) => <strong {...props} style={{ color: '#eee' }} />,
  em: (props) => <em {...props} />,
};

const Application: React.FC = () => {
  const [styledTheme, setStyledTheme] = React.useState(light);
  const [darkTheme, setDarkTheme] = useState(true);
  const [activePage, setActivePage] = useState<Page>(Page.TrafficRules);

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  // const [styledTheme, setStyledTheme] = React.useState(dark);

  useLayoutEffect(() => {
    const fontSize = AppSettingsStore.getFontSize();
    const themeName = AppSettingsStore.getTheme();
    const theme = themeName === 'light' ? light : dark;

    setStyledTheme({
      ...theme,
      fontSize,
    });
  }, []);

  const updateFontSize: UpdateFortSizeFunc = (key = 'base', direction) => {
    const currentFontSize = Number(styledTheme.fontSize?.[key].replace('px', ''));
    const updatedFontSize = direction === 'up' ? `${currentFontSize + 1}px` : `${currentFontSize - 1}px`;

    AppSettingsStore.setFontSize({ [key]: updatedFontSize });

    setStyledTheme({
      ...styledTheme,
      fontSize: {
        ...styledTheme.fontSize,
        [key]: updatedFontSize,
      },
    });
  };

  const setTheme = (themeName: AppSettings['theme']) => {
    const fontSize = AppSettingsStore.getFontSize();
    const theme = themeName === 'light' ? light : dark;

    const updatedTheme: Theme = {
      ...theme,
      fontSize,
    };

    AppSettingsStore.setTheme(themeName);
    setStyledTheme(updatedTheme);
  };

  return (
    <ThemeProvider theme={styledTheme}>
      {/* <GlobalStyles /> */}
      <AppSettingsProvider {...{ updateFontSize, setTheme }}>
        <AppSettingsPanel />

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <button onClick={() => setActivePage(Page.TrafficRules)}>Правила дорожного движения</button>
            </div>
            <div className='col'>
              <button>Дорожные знаки</button>
            </div>
            <div className='col'>
              <button onClick={() => setActivePage(Page.RoadMarkings)}>Дорожная разметка</button>
            </div>
          </div>
        </div>
        {activePage === Page.TrafficRules && (
          <div className='container'>
            <ReferenceProvider>
              <MDXProvider components={components}>
                <Suspense fallback={<LoadingPost />}>
                  <Post1 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post2 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post3 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post4 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post5 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post6 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post7 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post8 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post9 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post10 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post11 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post12 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post13 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post14 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post15 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post16 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post17 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post18 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post19 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post20 />
                </Suspense>
                <Suspense fallback={<LoadingPost />}>
                  <Post21 />
                </Suspense>
              </MDXProvider>
            </ReferenceProvider>
          </div>
        )}

        {activePage === Page.RoadMarkings && (
          <Suspense fallback={<LoadingPost />}>
            <RoadMarkings />
          </Suspense>
        )}

        {/* <div id='erwt'>
     
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>React Webpack Typescript</h1>
        </div>
        <div className='main-teaser'>
          <div>
            Robust boilerplate for Desktop Applications with Electron and
            ReactJS. Hot Reloading is used in this project for fast development
            experience.
            <br />
            If you think the project is useful enough, just spread the word
            around!
          </div>
        </div>
        <div className='versions'>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.erwt} /> ERWT
            </div>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.typescript} /> Typescript
            </div>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.react} /> React
            </div>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.webpack} /> Webpack
            </div>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.chrome} /> Chrome
            </div>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.license} /> License
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='center'>
          <button
            onClick={() => {
              if (counter > 99) return alert('Going too high!!');
              setCounter(counter + 1);
            }}
          >
            Increment {counter != 0 ? counter : ''} <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button
            onClick={() => {
              if (counter == 0) return alert('Oops.. thats not possible!');
              setCounter(counter > 0 ? counter - 1 : 0);
            }}
          >
            Decrement <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={toggleTheme}>
            {darkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </div>
    </div> */}
      </AppSettingsProvider>
    </ThemeProvider>
  );
};

export default Application;
