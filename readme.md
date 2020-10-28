# html生成プログラム
htmlパターンにデータを挿入するためのプログラムです。

# 使用方法
ルートディレクトリ上でnpm install後、npm startで動作します。
nodebrew v12.14.1で動作確認済です。

# ファイルの説明・使用法
- /src/generator.ts
変数groupNameにて、ディレクトリごとに分けたファイルを指定してください。
以下${groupName}と記載します。

- /src/${groupName}data.json
htmlに挿入したいデータを格納します。

- /src/${groupName}base.ejs
ejsにてデータの挿入箇所を記述します。
data.jsonと変数名を合わせつつ、適宜if文やforEach文を利用してください。
/src/sample/base.ejsにて基本的な記法を記載してあります。

# フォルダの説明
- /dist
tsの吐き出し先です。
- /dest
htmlの吐き出し先です。