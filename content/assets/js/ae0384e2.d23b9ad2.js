"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3902],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57808:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Hudi Z-Order and Hilbert Space Filling Curves",excerpt:"Explore the benefits of new Apache Hudi Z-Order and Hilbert Curves",author:"Alexey Kudinkin and Tao Meng",category:"blog"},s=void 0,p={permalink:"/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",source:"@site/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",title:"Hudi Z-Order and Hilbert Space Filling Curves",description:"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as Z-order and Hilbert space filling curves.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[],readingTime:8.5,truncated:!0,authors:[{name:"Alexey Kudinkin and Tao Meng"}],nextItem:{title:"Lakehouse Concurrency Control: Are we too optimistic?",permalink:"/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic"}},u={authorsImageUrls:[void 0]},d=[],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Z-order_curve"},"Z-order")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hilbert_curve"},"Hilbert")," space filling curves."),(0,i.kt)("h1",{id:"background"},"Background"),(0,i.kt)("p",null,"Amazon EMR team recently published a ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/new-features-from-apache-hudi-0-7-0-and-0-8-0-available-on-amazon-emr/"},"great article")," show-casing how ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/clustering"},"clustering")," your data can improve your ",(0,i.kt)("em",{parentName:"p"},"query performance"),"."),(0,i.kt)("p",null,"To better understand what's going on and how it's related to space-filling curves, let's zoom in to the setup in that article:"),(0,i.kt)("p",null,"In the article, 2 ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/overview"},"Apache Hudi")," tables are compared (both ingested from the well-known ",(0,i.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/amazon-reviews-pds/tsv/index.txt"},"Amazon Reviews")," dataset):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amazon_reviews")," table which is not clustered (ie the data has not been re-ordered by any particular key)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amazon_reviews_clustered")," table which is clustered. When data is clustered by Apache Hudi the data is ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lexicographic_order"},(0,i.kt)("strong",{parentName:"a"},"lexicographically ordered"))," (hereon we will be referring to this kind of ordering as ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"linear ordering")),") by 2 columns: ",(0,i.kt)("inlineCode",{parentName:"li"},"star_rating"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"total_votes")," (see screenshot below)")),(0,i.kt)("img",{src:"/assets/images/hudiconfigz.png",alt:"drawing",width:"800"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Screenshot of the Hudi configuration (from Amazon EMR team article)")),(0,i.kt)("p",null,"To showcase the improvement in querying performance, the following queries are executed against both of these tables:"),(0,i.kt)("img",{src:"/assets/images/table1.png",alt:"drawing",width:"800"}),(0,i.kt)("img",{src:"/assets/images/table2.png",alt:"drawing",width:"800"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Screenshots of the queries run against the previously setup tables (from Amazon EMR team article)")),(0,i.kt)("p",null,"The important consideration to point out here is that the queries were specifying ",(0,i.kt)("strong",{parentName:"p"},"both of the columns")," latter table is ordered by (both ",(0,i.kt)("inlineCode",{parentName:"p"},"star_rating")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"total_votes"),")."),(0,i.kt)("p",null,"And this is unfortunately a crucial limitation of the linear/lexicographic ordering, the value of the ordering diminishes very quickly as you add more columns. It's not hard to see why:"),(0,i.kt)("img",{src:"/assets/images/lexicographicorder.png",alt:"drawing",width:"250"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Courtesy of Wikipedia,")," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lexicographic_order"},(0,i.kt)("em",{parentName:"a"},"Lexicographic Order article"))),(0,i.kt)("p",null,"From this image you can see that with lexicographically ordered 3-tuples of integers, only the first column is able to feature crucial property of ",(0,i.kt)("strong",{parentName:"p"},"locality"),' for all of the records having the same value: for ex, all of the records wit values starting with "1", "2", "3" (in the first columns) are nicely clumped together. However if you try to find all the values that have "5" as the value in their third column you\'d see that those are now dispersed all over the place, not being localized at all.'),(0,i.kt)("p",null,"The crucial property that improves query performance is locality: it enables queries to substantially reduce the search space and the number of files that need to be scanned, parsed, etc."),(0,i.kt)("p",null,"But... does this mean that our queries are doomed to do a full-scan if we're filtering by anything other than the first (or more accurate would be to say prefix) of the list of columns the table is ordered by?"),(0,i.kt)("p",null,"Not exactly: luckily, locality is also a property that space-filling curves enable while enumerating multi-dimensional spaces (records in our table could be represented as points in N-dimensional space, where N is the number of columns in our table)"),(0,i.kt)("p",null,"How does it work?"),(0,i.kt)("p",null,"Let's take Z-curve as an example: Z-order curves fitting a 2-dimensional plane would look like the following:"),(0,i.kt)("img",{src:"/assets/images/zordercurve.png",alt:"drawing",width:"400"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Courtesy of Wikipedia,")," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Z-order_curve"},(0,i.kt)("em",{parentName:"a"},"Z-order curve article"))),(0,i.kt)("p",null,'As you can see following its path, instead of simply ordering by one coordinate ("x") first, following with the other, it\'s actually ordering them as if the bits of those coordinates have been ',(0,i.kt)("em",{parentName:"p"},"interwoven")," into a single value:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Coordinate"),(0,i.kt)("th",{parentName:"tr",align:null},"X (binary)"),(0,i.kt)("th",{parentName:"tr",align:null},"Y (binary)"),(0,i.kt)("th",{parentName:"tr",align:null},"Z-values (ordered)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(0, 0)"),(0,i.kt)("td",{parentName:"tr",align:null},"000"),(0,i.kt)("td",{parentName:"tr",align:null},"000"),(0,i.kt)("td",{parentName:"tr",align:null},"000000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(1, 0)"),(0,i.kt)("td",{parentName:"tr",align:null},"001"),(0,i.kt)("td",{parentName:"tr",align:null},"000"),(0,i.kt)("td",{parentName:"tr",align:null},"000001")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(0, 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"000"),(0,i.kt)("td",{parentName:"tr",align:null},"001"),(0,i.kt)("td",{parentName:"tr",align:null},"000010")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(1, 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"001"),(0,i.kt)("td",{parentName:"tr",align:null},"001"),(0,i.kt)("td",{parentName:"tr",align:null},"000011")))),(0,i.kt)("p",null,'This allows for that crucial property of locality (even though a slightly "stretched" one) to be carried over to all columns as compared to just the first one in case of linear ordering.'),(0,i.kt)("p",null,"In a similar fashion, Hilbert curves also allow you to map points in a N-dimensional space (rows in our table) onto 1-dimensional curve, essentially ",(0,i.kt)("em",{parentName:"p"},"ordering")," them, while still preserving the crucial property of locality. Read more details about Hilbert Curves ",(0,i.kt)("a",{parentName:"p",href:"https://drum.lib.umd.edu/handle/1903/804"},"here"),". Our personal experiments so far show that ordering data along a Hilbert curve leads to better clustering and performance outcomes."),(0,i.kt)("p",null,"Now, let's check it out in action!"),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/amazon-reviews-pds/readme.html"},"Amazon Reviews")," dataset again, but this time we will use Hudi to Z-Order by ",(0,i.kt)("inlineCode",{parentName:"p"},"product_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"customer_id")," columns tuple instead of Clustering or ",(0,i.kt)("em",{parentName:"p"},"linear ordering"),"."),(0,i.kt)("p",null,"No special preparations are required for the dataset, you can simply download it from ",(0,i.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/amazon-reviews-pds/readme.html"},"S3")," in Parquet format and use it directly as an input for Spark ingesting it into Hudi table."),(0,i.kt)("p",null,"Launch Spark Shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/spark-shell --master 'local[4]' --driver-memory 8G --executor-memory 8G \\\n  --jars ../../packaging/hudi-spark-bundle/target/hudi-spark3-bundle_2.12-0.10.0.jar \\\n  --packages org.apache.spark:spark-avro_2.12:2.4.4 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer'\n")),(0,i.kt)("p",null,"Paste"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hadoop.fs.{FileStatus, Path}\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.{DataSourceReadOptions, DataSourceWriteOptions}\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.common.fs.FSUtils\nimport org.apache.hudi.common.table.HoodieTableMetaClient\nimport org.apache.hudi.common.util.ClusteringUtils\nimport org.apache.hudi.config.HoodieClusteringConfig\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.spark.sql.DataFrame\n\nimport java.util.stream.Collectors\n\nval layoutOptStrategy = "z-order"; // OR "hilbert"\n\nval inputPath = s"file:///${System.getProperty("user.home")}/datasets/amazon_reviews_parquet"\nval tableName = s"amazon_reviews_${layoutOptStrategy}"\nval outputPath = s"file:///tmp/hudi/$tableName"\n\n\ndef safeTableName(s: String) = s.replace(\'-\', \'_\')\n\nval commonOpts =\n  Map(\n    "hoodie.compact.inline" -> "false",\n    "hoodie.bulk_insert.shuffle.parallelism" -> "10"\n  )\n\n\n////////////////////////////////////////////////////////////////\n// Writing to Hudi\n////////////////////////////////////////////////////////////////\n\nval df = spark.read.parquet(inputPath)\n\ndf.write.format("hudi")\n  .option(DataSourceWriteOptions.TABLE_TYPE.key(), COW_TABLE_TYPE_OPT_VAL)\n  .option("hoodie.table.name", tableName)\n  .option(PRECOMBINE_FIELD.key(), "review_id")\n  .option(RECORDKEY_FIELD.key(), "review_id")\n  .option(DataSourceWriteOptions.PARTITIONPATH_FIELD.key(), "product_category")\n  .option("hoodie.clustering.inline", "true")\n  .option("hoodie.clustering.inline.max.commits", "1")\n  // NOTE: Small file limit is intentionally kept _ABOVE_ target file-size max threshold for Clustering,\n  // to force re-clustering\n  .option("hoodie.clustering.plan.strategy.small.file.limit", String.valueOf(1024 * 1024 * 1024)) // 1Gb\n  .option("hoodie.clustering.plan.strategy.target.file.max.bytes", String.valueOf(128 * 1024 * 1024)) // 128Mb\n  // NOTE: We\'re increasing cap on number of file-groups produced as part of the Clustering run to be able to accommodate for the \n  // whole dataset (~33Gb)\n  .option("hoodie.clustering.plan.strategy.max.num.groups", String.valueOf(4096))\n  .option(HoodieClusteringConfig.LAYOUT_OPTIMIZE_ENABLE.key, "true")\n  .option(HoodieClusteringConfig.LAYOUT_OPTIMIZE_STRATEGY.key, layoutOptStrategy)\n  .option(HoodieClusteringConfig.PLAN_STRATEGY_SORT_COLUMNS.key, "product_id,customer_id")\n  .option(DataSourceWriteOptions.OPERATION.key(), DataSourceWriteOptions.BULK_INSERT_OPERATION_OPT_VAL)\n  .option(BULK_INSERT_SORT_MODE.key(), "NONE")\n  .options(commonOpts)\n  .mode(ErrorIfExists)\n  \n')),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Please keep in mind, that each individual test is run in a separate spark-shell to avoid caching getting in the way of our measurements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'////////////////////////////////////////////////////////////////\n// Reading\n///////////////////////////////////////////////////////////////\n\n// Temp Table w/ Data Skipping DISABLED\nval readDf: DataFrame =\n  spark.read.option(DataSourceReadOptions.ENABLE_DATA_SKIPPING.key(), "false").format("hudi").load(outputPath)\n\nval rawSnapshotTableName = safeTableName(s"${tableName}_sql_snapshot")\n\nreadDf.createOrReplaceTempView(rawSnapshotTableName)\n\n\n// Temp Table w/ Data Skipping ENABLED\nval readDfSkip: DataFrame =\n  spark.read.option(DataSourceReadOptions.ENABLE_DATA_SKIPPING.key(), "true").format("hudi").load(outputPath)\n\nval dataSkippingSnapshotTableName = safeTableName(s"${tableName}_sql_snapshot_skipping")\n\nreadDfSkip.createOrReplaceTempView(dataSkippingSnapshotTableName)\n\n// Query 1: Total votes by product_category, for 6 months\ndef runQuery1(tableName: String) = {\n  // Query 1: Total votes by product_category, for 6 months\n  spark.sql(s"SELECT sum(total_votes), product_category FROM $tableName WHERE review_date > \'2013-12-15\' AND review_date < \'2014-06-01\' GROUP BY product_category").show()\n}\n\n// Query 2: Average star rating by product_id, for some product\ndef runQuery2(tableName: String) = {\n  spark.sql(s"SELECT avg(star_rating), product_id FROM $tableName WHERE product_id in (\'B0184XC75U\') GROUP BY product_id").show()\n}\n\n// Query 3: Count number of reviews by customer_id for some 5 customers\ndef runQuery3(tableName: String) = {\n  spark.sql(s"SELECT count(*) as num_reviews, customer_id FROM $tableName WHERE customer_id in (\'53096570\',\'10046284\',\'53096576\',\'10000196\',\'21700145\') GROUP BY customer_id").show()\n}\n\n//\n// Query 1: Is a "wide" query and hence it\'s expected to touch a lot of files\n//\nscala> runQuery1(rawSnapshotTableName)\n+----------------+--------------------+\n|sum(total_votes)|    product_category|\n+----------------+--------------------+\n|         1050944|                  PC|\n|          867794|             Kitchen|\n|         1167489|                Home|\n|          927531|            Wireless|\n|            6861|               Video|\n|           39602| Digital_Video_Games|\n|          954924|Digital_Video_Dow...|\n|           81876|             Luggage|\n|          320536|         Video_Games|\n|          817679|              Sports|\n|           11451|  Mobile_Electronics|\n|          228739|  Home_Entertainment|\n|         3769269|Digital_Ebook_Pur...|\n|          252273|                Baby|\n|          735042|             Apparel|\n|           49101|    Major_Appliances|\n|          484732|             Grocery|\n|          285682|               Tools|\n|          459980|         Electronics|\n|          454258|            Outdoors|\n+----------------+--------------------+\nonly showing top 20 rows\n\nscala> runQuery1(dataSkippingSnapshotTableName)\n+----------------+--------------------+\n|sum(total_votes)|    product_category|\n+----------------+--------------------+\n|         1050944|                  PC|\n|          867794|             Kitchen|\n|         1167489|                Home|\n|          927531|            Wireless|\n|            6861|               Video|\n|           39602| Digital_Video_Games|\n|          954924|Digital_Video_Dow...|\n|           81876|             Luggage|\n|          320536|         Video_Games|\n|          817679|              Sports|\n|           11451|  Mobile_Electronics|\n|          228739|  Home_Entertainment|\n|         3769269|Digital_Ebook_Pur...|\n|          252273|                Baby|\n|          735042|             Apparel|\n|           49101|    Major_Appliances|\n|          484732|             Grocery|\n|          285682|               Tools|\n|          459980|         Electronics|\n|          454258|            Outdoors|\n+----------------+--------------------+\nonly showing top 20 rows\n\n//\n// Query 2: Is a "pointwise" query and hence it\'s expected that data-skipping should substantially reduce number \n// of files scanned (as compared to Baseline)\n//\n// NOTE: That Linear Ordering (as compared to Space-curve based on) will have similar effect on performance reducing\n// total # of Parquet files scanned, since we\'re querying on the prefix of the ordering key\n//\nscala> runQuery2(rawSnapshotTableName)\n+----------------+----------+\n|avg(star_rating)|product_id|\n+----------------+----------+\n|             1.0|B0184XC75U|\n+----------------+----------+\n\n\nscala> runQuery2(dataSkippingSnapshotTableName)\n+----------------+----------+\n|avg(star_rating)|product_id|\n+----------------+----------+\n|             1.0|B0184XC75U|\n+----------------+----------+\n\n//\n// Query 3: Similar to Q2, is a "pointwise" query, but querying other part of the ordering-key (product_id, customer_id)\n// and hence it\'s expected that data-skipping should substantially reduce number of files scanned (as compared to Baseline, Linear Ordering).\n//\n// NOTE: That Linear Ordering (as compared to Space-curve based on) will _NOT_ have similar effect on performance reducing\n// total # of Parquet files scanned, since we\'re NOT querying on the prefix of the ordering key\n//\nscala> runQuery3(rawSnapshotTableName)\n+-----------+-----------+\n|num_reviews|customer_id|\n+-----------+-----------+\n|         50|   53096570|\n|          3|   53096576|\n|         25|   10046284|\n|          1|   10000196|\n|         14|   21700145|\n+-----------+-----------+\n\nscala> runQuery3(dataSkippingSnapshotTableName)\n+-----------+-----------+\n|num_reviews|customer_id|\n+-----------+-----------+\n|         50|   53096570|\n|          3|   53096576|\n|         25|   10046284|\n|          1|   10000196|\n|         14|   21700145|\n+-----------+-----------+\n')),(0,i.kt)("h1",{id:"results"},"Results"),(0,i.kt)("p",null,"We've summarized the measured performance metrics below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Query")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Baseline (B)")," duration (files scanned / size)"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Linear Sorting (S)")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Z-order (Z)")," duration (scanned)"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Hilbert (H)")," duration (scanned)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Q1"),(0,i.kt)("td",{parentName:"tr",align:null},"14s (543 / 31.4Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},"15s (533 / 28.8Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},"15s (543 / 31.4Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},"14s (541 / 31.3Gb)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Q2"),(0,i.kt)("td",{parentName:"tr",align:null},"21s (543 / 31.4Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},"10s (533 / 28.8Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"8s")," ",(0,i.kt)("strong",{parentName:"td"},"(243 / 14.4Gb)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"7s")," ",(0,i.kt)("strong",{parentName:"td"},"(237 / 13.9Gb)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Q3"),(0,i.kt)("td",{parentName:"tr",align:null},"17s (543 / 31.4Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},"15s (533 / 28.8Gb)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"6s")," ",(0,i.kt)("strong",{parentName:"td"},"(224 / 12.4Gb)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"6s")," ",(0,i.kt)("strong",{parentName:"td"},"(219 / 11.9Gb)"))))),(0,i.kt)("p",null,"As you can see multi-column linear ordering is not very effective for the queries that do filtering by columns other than the first one (Q2, Q3)."),(0,i.kt)("p",null,"Which is a very clear contrast with space-filling curves (both Z-order and Hilbert) that allow to speed up query time by up to ",(0,i.kt)("strong",{parentName:"p"},"3x!")),(0,i.kt)("p",null,"It's worth noting that the performance gains are heavily dependent on your underlying data and queries. In benchmarks on our internal data we were able to achieve queries performance improvements of more than ",(0,i.kt)("strong",{parentName:"p"},"11x!")),(0,i.kt)("h1",{id:"epilogue"},"Epilogue"),(0,i.kt)("p",null,"Apache Hudi v0.10 brings new layout optimization capabilities Z-order and Hilbert to open source. Using these industry leading layout optimization techniques can bring substantial performance improvement and cost savings to your queries!"))}m.isMDXComponent=!0}}]);