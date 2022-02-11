/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dotEnv from 'dotenv';
import { ViteAliases } from 'vite-aliases';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { flowPlugin, esbuildFlowPlugin } from '@bunchtogether/vite-plugin-flow';
import reactRefresh from '@vitejs/plugin-react-refresh';

/** Resolve .env file path */
const resolveEnvPath = (mode) => {
  if (fs.existsSync(path.join(__dirname, `.env.${mode}`))) {
    return `./.env.${mode}`;
  }
  return './.env';
};

/**
 * "Filter" env variables
 */
const viteize = (values) =>
  Object.keys(values)
    .filter((key) => /^VITE_/i.test(key))
    .reduce((acc, key) => ({ ...acc, [key]: values[key] }), {});

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envPath = resolveEnvPath(mode);
  const envConfig = dotEnv.config({ path: envPath });
  // const envConfig = dotEnv.config({ path: './.env' });
  const env = envConfig.parsed || {};
  // now you can access config with process.env.{mode} or just .env

  return defineConfig({
    optimizeDeps: {
      esbuildOptions: {
        plugins: [esbuildFlowPlugin()],
      },
    },
    plugins: [flowPlugin(), ViteAliases(), eslintPlugin(), reactRefresh()],
    hmr: { overlay: false },
    define: {
      'process.env': viteize(env),
    },
    server: {
      port: parseInt(env.PORT || '3000', 10),
      open: true,
    },
  });
};
