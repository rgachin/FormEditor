var path = require('path');

module.exports = {
    entry: "./app/app.jsx", // ������� ����� - �������� ����
    output: {
        path: path.resolve(__dirname, './public'),     // ���� � �������� �������� ������ - ����� public
        publicPath: '/public/',
        filename: "bundle.js"       // �������� ������������ �����
    },
    module: {
        rules: [   //��������� ��� jsx
            {
                test: /\.jsx?$/, // ���������� ��� ������
                exclude: /(node_modules)/,  // ��������� �� ��������� ����� node_modules
                loader: "babel-loader",   // ���������� ���������
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]    // ������������ �������
                }
            }
        ]
    }
}