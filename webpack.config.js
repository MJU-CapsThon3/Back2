import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './src/index.js',
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
};