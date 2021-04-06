# Sword
FrontはVue.js
BackはFlask

## DB構成
```
CREATE TABLE `user` (
   `id` INT NOT NULL AUTO_INCREMENT ,
   `line_id` TEXT NOT NULL ,
   `nick_name` VARCHAR(255) NOT NULL ,
   `sex` BOOLEAN NOT NULL , PRIMARY KEY (`id`)
   )
```

```
CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `line_id` text NOT NULL,
  `day` date NOT NULL,
  `time` time NOT NULL,
  `weight` int(11) NOT NULL,
  `weight_rate` int(11) NOT NULL,
  `weight_rate_kg` int(11) NOT NULL,
  `basic_kcal` int(11) NOT NULL,
  `sleep_time` time NOT NULL,
  `water` int(11) NOT NULL,
  `mail_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)
```

## diary
### 4/6
1. fin
  - Vue-Projectの作成
  - Flask雛形の準備
  - Vuexについての学習
  - テスト用DB　SQL作成
2. yet
  - Vue-routerの設定
  - partの作成
  - backendの処理
