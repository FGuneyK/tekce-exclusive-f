# TEKCE Exclusive — Tasarım Prototipi

Bu doküman, TEKCE Exclusive web sitesinin yeni tasarım prototipini geliştirecek ekip için hazırlandı. Amacı tek bir soruya cevap vermek: **Bu prototip neden böyle tasarlandı ve siteyi geliştirirken hangi kararların korunması gerekiyor?**

Prototipin kodu, tasarımı göstermek için yazıldı. Onu birebir taşımanız beklenmiyor; korunması gereken şey, burada anlatılan tasarım kararları.

---

## 1. Neyin değiştiği

Mevcut site, alıcıya konut gösteren bir ilan sitesi gibi çalışıyor. Yeni site ise geliştiricilere ve profesyonel satış ortaklarına konuşan bir **proje satış ve dağıtım platformu** olarak kurgulandı.

Merkezdeki fikir "Sell with Us": Bir geliştirici ya da partner ajans neden projesini ve müşterisini TEKCE Exclusive'e emanet etsin? Sitedeki her sayfa bu soruya bir taraftan cevap veriyor. Alıcı hâlâ sitede, ama birinci muhatap değil.

---

## 2. Tasarım yaklaşımı

Modernliği efektlerle değil, kompozisyon, tipografi ve kararlı bir dille kurduk. Gradient, glassmorphism, yüzen şekiller, her yeri saran kartlar ya da süs niyetine animasyon yok. Bir bölümün iyi görünmesi, içeriğinin iyi düzenlenmesinden geliyor: net bir başlık, doğru yoğunlukta bilgi, amacı olan bir görsel.

---

## 3. Hedef kitle ve öncelikleri

Sitenin üç muhatabı var ve öncelik sırası bilinçli:

1. **Geliştiriciler** — projeyi inşa eden firmalar. Onlara anlatılan: projeniz uluslararası pazara nasıl çıkar, sorumluluğu kim alır, satışı nasıl takip edersiniz. Ana sayfa, Developers ve Platform sayfaları öncelikle onlarla konuşuyor.
2. **Partner ajanslar** — uluslararası müşterisi olan emlak ofisleri. Onlara anlatılan: seçilmiş projeler, kayıt altına alınan ve korunan müşteriler, şeffaf komisyon ve sahada destek. Partners sayfası ve Platform'un bir bölümü onların.
3. **Alıcılar** — sitenin ikinci planındaki ama unutulmayan kitle. Invest, Projects ve Markets sayfaları onlara konuşuyor.

Bazı sayfalar hangi kitleyle konuşmadığını da bilerek seçti. Markets sayfaları geliştiriciye pazar anlatmıyor, çünkü bir pazarın geliştirici için değeri, projesinin zaten nerede olduğuna bağlı. Bu sayfalar alıcıya ve partnere, tarafsız bir gözle konuşuyor.

Kitleler arasındaki ayrımı metinlerde de koruyun: "Developers" projeyi inşa edenler, "Partners" onu satan ajans ağı. İkisi hiçbir yerde birbirinin yerine kullanılmıyor.

---

## 4. Bilgi mimarisi ve sayfa yapısı

### Navigasyon

Üst başlık iki satırdan oluşuyor. İlk satırda logo, dil seçici ve sitenin tek ticari aksiyonu **Submit Your Project** var. İkinci satır sitenin haritası: Developers, Partners, Projects, Markets, Invest, Platform, Insights, Company.

- **Markets** hem bir sayfa hem bir menü: etikete tıklamak pazarlar sayfasına gider, yanındaki ok dört ülkenin listesini açar.
- **Insights** blog sayfasına gider.
- Mobilde menü tam ekran bir panel olarak açılır, Markets orada da aynı ikili davranışı korur.

### Sayfalar

| Sayfa | Görevi |
|---|---|
| Ana sayfa | Platformu tek nefeste anlatmak: ne yapıyoruz, nasıl çalışıyor, nerede satıyoruz, kimlerle. |
| Developers | Geliştiriciyi ikna etmek: tek sorumlu ortak, ne üstleniyoruz, satış nasıl raporlanıyor, süreç nasıl başlıyor. |
| Partners | Ajansı ikna etmek: müşteri ajansta kalır, komisyon şeffaf, saha desteği hazır. Sayfa başvuru formuyla biter. |
| Invest | Alıcıya konuşan tek sayfa: neden yeni konut, neden bu yoldan, sorulması gereken sorular. |
| Projects | Temsil edilen projelerin listesi; her projenin kendi detay sayfası var. |
| Markets | Satış yapılan dört pazarın listesi; her ülkenin kendi detay sayfası var. |
| Platform | Arka plandaki sistem: dağıtım, TeleProperty, satış kaydı, geliştirici ve partner ekranları. |
| Insights | Kaynaklı rehber yazılar ve görüş yazıları; her yazının kendi sayfası var. |
| Company | TEKCE Exclusive ve TEKCE Group: tarihçe, iş modeli, ofis ağı, değerler, iletişim. |

### Ortak sayfa kurgusu

Pazarlama sayfalarının (Developers, Partners, Invest, Company, Platform) hepsi aynı mantıkla kuruldu: güçlü, kısa bölümler ve sayfanın ortasında bir **uzun okuma** bölümü. Uzun okuma, sayfanın savını madde listesi yerine düz yazıyla anlatıyor. Ama her sayfanın kompozisyonu bilerek farklı; aynı bölüm kalıbı sayfadan sayfaya kopyalanmadı.

Projects, Markets ve Insights ise **liste + detay** yapısında. Liste sayfaları kısa bir başlık bandıyla açılıp doğrudan içeriğe geçiyor; detay sayfaları aynı şablondan üretiliyor.

---

## 5. Önemli bölüm mantıkları

**Dağıtım ekosistemi (ana sayfa, Developers, Platform).** İş modelinin kendisi: geliştirici projeyi getirir, TEKCE Exclusive stratejiyi ve dağıtımı yönetir, satış iki kanaldan paralel yürür (TEKCE ve bağımsız partnerler), iki kanal da uluslararası alıcıya ulaşır. Diyagram her üç sayfada aynı, çünkü modelin tek bir doğru anlatımı olmalı.

**How it works (ana sayfa).** Dört aşama: Position, Prepare, Distribute, Manage. Her aşamanın fotoğrafının üzerinde, o aşamanın ne ürettiğini gösteren küçük bir arayüz paneli var. İkon yerine "ortaya çıkan iş" gösteriliyor.

**Proje detayında satılanların listede kalması.** Proje sayfaları bir ilan gibi çalışıyor: galerinin yanında fiyat, müsaitlik ve "Inquire Now" içeren yapışkan bir panel var. Asıl ayırt edici kısım unit listesi. Satılan konutlar listeden silinmiyor, "Sold" olarak kalıyor. Liste önce yatak odası sayısına göre özetleniyor, tam liste bir tık ötede duruyor. Binanın her konutu için bir işaret taşıyan ince bir şerit, doluluğu tek bakışta gösteriyor. Bu dürüstlük markanın sesi; korunmalı.

**Pazar sayfalarında maliyet tablosu ve karşılaştırma.** Her ülke sayfası, fiyatın üzerine eklenen masrafları kalem kalem gösteriyor: oran, kimin ödediği, toplam aralık. Pazarlar ana sayfasında dört ülkenin mülkiyet, tapu sicili, alıcının alması gereken belge ve tapu süresi yan yana duruyor. Bunlar broşürlerin yan yana koymadığı bilgiler; sayfaları değerli kılan da bu.

**Uzun okuma bölümleri.** Her pazarlama sayfasının ortasında bir deneme var: "A listing is not a sales strategy.", "An agency's real inventory is its clients." gibi. Bunlar özellik listesi değil, bir bakış açısı. Tipografik olarak her biri farklı kurgulandı: kenar notları, sabit bölüm başlıkları, tam genişlikte alıntı gibi.

**Makale sayfasında yan kolon.** Blog yazılarında okuma kolonunun yanında sayfayla birlikte kayan dar bir kolon var: yazının ara başlıkları ve tek bir aksiyon. Böylece aksiyon ilk ekranda görünüyor ama okumayı bölmüyor.

**İllüstratif arayüzler.** Platform sayfasındaki geliştirici paneli ve partner ekranları henüz tasarımı kesinleşmemiş ürünleri temsil ediyor ve altlarında "Illustrative interface." yazıyor. Bu etiketi kaldırmayın.

---

## 6. Tasarım dili

**Renk.** Beş renk var ve roller net:

| Renk | Değer | Kullanım |
|---|---|---|
| Ink | `#1C2248` | Ana marka rengi. Metin, koyu bantlar, birincil butonlar. |
| Ink deep | `#151A3A` | Ink'in bir ton koyusu; hover ve derinlik için. |
| Accent | `#E63E5E` | Logodan gelen kırmızı. Çok az kullanılır: "Submit Your Project" bandı ve diyagramdaki alıcı düğümü gibi. |
| Mist | `#F3F4F7` | Açık gri zemin; bantlar arasında ritim kurar. |
| Paper | `#FFFFFF` | Ana zemin. |

Sayfalar ink, mist ve paper bantlarının dönüşümlü ilerlemesiyle nefes alıyor. Aynı zemin art arda geldiğinde bantları ince bir çizgi ayırıyor.

**Geometri.** Bütün köşeler kare; logodaki kare T çerçevesinin devamı. Yuvarlatılmış kart, yuvarlatılmış buton, hap şeklinde etiket yok.

**Çizgi, kutu değil.** Bilgiyi ayırmak için kart ve gölge yerine ince çizgiler (hairline) kullanıldı. Veri listeleri, tablolar, adımlar hep aynı ince çizgi ritmiyle ayrılıyor.

**Bilerek kaçınılanlar:**
- Başlıkların üstünde küçük etiketler (eyebrow). Her bölüm doğrudan başlıkla açılır.
- Büyük istatistik karoları ("20+ ofis" gibi rakam blokları).
- Fotoğrafın altına geniş beyaz bir yazı kutusu eklenen "polaroid" kartlar.
- Dekoratif ikonlar, gradient arka planlar, yüzen şekiller.

---

## 7. Tipografi

Tek bir font ailesi var: **Archivo**. Hiyerarşi ağırlık, boyut ve harf aralığıyla kuruluyor, ikinci bir fontla değil.

- **Display başlıklar** (H1): masaüstünde yaklaşık 64 px, sıkı satır aralığı ve hafif negatif harf aralığı. Kısa, düz ve iddialı cümleler; sonları noktayla biter.
- **Bölüm başlıkları** (H2): masaüstünde 40–48 px. Aynı ton: bir cümle, bir fikir.
- **Gövde metni**: 17–18 px, rahat satır aralığı (1.6–1.75). Uzun okumalarda satır uzunluğu yaklaşık 68 karakterde tutuldu.
- **Veri etiketleri**: 13 px, soluk ink tonunda. Rakamlar eşit genişlikte (tabular) dizilir, böylece tablolardaki rakamlar alt alta hizalanır.

Başlıklarda kelime oyunu yok. "We take real estate projects to international markets." gibi düz cümleler tercih edildi; zekice ama belirsiz başlıklar denendi ve elendi.

---

## 8. Boşluk ve yerleşim

**Tek hizalama çizgisi.** Sitenin her bandı aynı kapsayıcıyı kullanıyor: en fazla 1440 px genişlik, mobilde 20 px, tablette 32 px, masaüstünde 40 px kenar boşluğu. Header'daki logo ile sayfadaki her başlık aynı sol çizgiden başlar. Bu ilişki bozulursa sayfa dağınık görünür.

**Tek dikey ritim.** İçerik bölümlerinin hepsi aynı üst ve alt boşluğu kullanıyor (mobilde 80 px, masaüstünde 96 px). Bölüm içindeki boşluklar değişebilir, bölümler arası ritim değişmez.

**12 kolonluk ızgara.** Kompozisyonların çoğu 12 kolon üzerinde kurulu: başlık 7, açıklama 5 kolon; görsel 5, veri 7 kolon gibi. Bu oranlar sayfalar arasında tekrar ediyor ve siteye tutarlılık veriyor.

**Yoğunluk bilinçli.** Boşluk hiyerarşi için kullanılıyor, sayfayı doldurmak için değil. Detay ve liste sayfalarında yoğunluk özellikle yüksek tutuldu. İlk taslaklarda "fazla boş" bulunan sayfalar daha fazla bilgiyle yeniden kuruldu.

---

## 9. Responsive davranış

Mobil, masaüstünün küçültülmüş hâli olarak değil, kendi kompozisyonuyla düşünüldü:

- Projects listesindeki sol filtre kolonu mobilde "Filters" düğmesiyle açılan bir panele dönüşür.
- Pazar karşılaştırma tablosu mobilde ülke ülke alt alta dizilen listelere ayrılır; dört kolonlu bir tablo telefonda okunmaz.
- Proje detayındaki yapışkan panel mobilde galerinin hemen altına iner.
- Ana sayfadaki proje vitrini mobilde yana kayan, parmakla çekilen bir sıraya dönüşür.
- Unit tablosunda telefonda ikincil sütunlar (kat, banyo, iç alan) gizlenir; birincil sütunlar okunaklı kalır.
- Ana sayfadaki SSS masaüstünde iki bölmeli bir okuyucu, mobilde tek cevabı açan bir akordeon.

Kural şu: masaüstündeki bir kompozisyon telefona doğal şekilde sığmıyorsa, zorlanmıyor, yeniden kuruluyor.

---

## 10. Component mantığı ve tekrar eden kalıplar

Tekrar eden kalıplar bilinçli olarak tek bir biçimde tutuldu. Aynı işi yapan iki farklı versiyon yok:

- **Buton çifti.** Yan yana iki buton her zaman aynı boyutta: 44 px yükseklik, 20 px yan boşluk, ortak bir minimum genişlik. Biri dolu, biri çerçeveli. Buton ile yanında düz bir link yan yana kullanılmıyor.
- **Veri paneli.** Fotoğrafların üzerinde duran küçük arayüz kartı: başlık satırı, etiket–değer satırları, işaretler. How it works, Developers, Invest ve Platform'da aynı panel kullanılıyor.
- **İnce çizgili veri listesi.** Solda etiket, sağda değer, aralarında ince çizgi. Proje künyesi, pazar bilgileri, mesafeler, maliyetler hep bu kalıpta.
- **Doluluk şeridi.** Binadaki her konut için bir işaret; dolu olanlar satılık, soluk olanlar satılmış. Proje listesinde ve detayında aynı.
- **Fotoğraflı liste satırı.** Solda görsel, sağda başlık, özet ve veri. Projects listesinde kullanılıyor.
- **Uzun okuma.** Her sayfada farklı dizilse de yapısı aynı: başlık, kısa bir giriş (spot), gövde, alıntı.

Bazı bölümler ise sayfaya özel ve öyle kalmalı: şirket sayfasındaki ofis haritası, Partners'taki müşteri kaydı akışı, Developers'taki ajans karşılaştırması gibi. Her şeyi tek bir genel bileşene zorlamak sayfaların karakterini siler.

---

## 11. Görsel kullanımı

Bir fotoğrafın üzerine metin yazıldığında, metnin okunabilmesi için fotoğrafın **yalnızca metnin durduğu bölgesi** hafifçe koyulaştırılıyor. Örneğin proje kartlarında isim fotoğrafın alt kısmında durur; kartın sadece altında aşağıdan yukarıya açılan bir koyuluk vardır, fotoğrafın geri kalanı olduğu gibi görünür.

Fotoğrafın tamamına koyu bir örtü atmak denendi ve reddedildi: fotoğrafı öldürüyor. Bu yaklaşımı yeni görseller eklenirken de koruyun.

---

## 12. Animasyon

Hareket az ve amaçlı:

- Görsellerde hover'da çok hafif, yavaş bir büyüme (yaklaşık %3).
- Linklerdeki okun hover'da birkaç piksel ilerlemesi.
- Dağıtım diyagramında, bir işaretin zincir boyunca ilerleyerek modelin akışını göstermesi.
- Ana sayfadaki pazar satırlarında, masaüstünde hover'da fotoğrafın soldan açılması.
- Menü, açılır panel ve akordeonlarda kısa geçişler.

Sayfa kaydırıldıkça beliren öğeler, paralaks ya da sürekli dönen animasyonlar yok. Kullanıcı sisteminde hareketi azaltmayı seçtiyse bütün animasyonlar kapanıyor; bu davranış korunmalı.

---

## 13. CTA mantığı

- **Her kitlenin kendi aksiyonu var.** Geliştirici için "Submit Your Project", ajans için "Become a Partner", alıcı için detay sayfalarında "Inquire Now". Header'da tek bir ticari aksiyon var: Submit Your Project.
- **Detay sayfalarında aksiyon ilk ekranda.** Proje, pazar ve makale sayfalarında sorma yolu sayfanın sonuna saklanmadı. Proje sayfasında yapışkan panelde, pazar sayfasında başlığın yanında, makalede yan kolonda duruyor.
- **CTA ne olacağını söyler.** "Learn more" ya da "Get started" yerine "See what we take on", "Buying in Spain", "Show all 63 units" gibi somut ifadeler kullanıldı.
- **Birincil ve ikincil ayrımı net.** Birincil aksiyon dolu buton, ikincisi çerçeveli buton. Üçüncü bir seviye gerekiyorsa altı çizili sade bir link olur.
- **Sayfa sonları kitleye göre bölünür.** Pazar sayfalarının sonunda alıcı için iletişim, ajans için ayrı ve sessiz bir kapı var. Tek bir bloğa iki teklif sıkıştırılmadı.

---

## 14. İçerik hiyerarşisi ve yazım kuralları

Her bölüm aynı sırayla okunur: **başlık → destekleyen cümle → veri → aksiyon**. Bir bölüm bu dört adımdan birini atlayabilir, ama sırasını değiştirmez.

Metinlerde korunması gereken kurallar:

- **Doğrulanmamış bilgi yazılmaz.** Sitedeki her rakam, oran, eşik ve tarih yayımlanmış bir kaynaktan geliyor. Kaynaklar TEKCE'nin ülke ve maliyet rehberleri, tekceexclusive.com'daki proje ve unit tabloları; hepsi Eylül 2026'da kontrol edildi. Blog yazıları kaynaklarını sonlarında listeliyor. Rakamlar zamanla değişir; yayından önce yeniden kontrol edilmeli.
- **Getiri vaadi yok.** Kira getirisi, yatırım getirisi, değer artışı ya da vergi planlaması iddiası hiçbir sayfada yok. Kaynak rehberlerde geçen bu tür ifadeler bilerek dışarıda bırakıldı. Hukuki ve mali konulara değinen bölümlerin sonunda "bu tavsiye değildir" notu var.
- **Adlandırma.** Grubun satış ortağı her yerde yalnızca "TEKCE" olarak geçiyor; "TEKCE Overseas" kullanılmıyor. Grup, "TEKCE Group" olarak yazılıyor.
- **Grup ve platform ayrımı.** Ofisler, danışmanlar ve hukuk ekibi TEKCE Group'a ait. TEKCE Exclusive'in ağzından "ofislerimiz" ya da "danışmanlarımız" yazılmıyor; "TEKCE's local infrastructure" gibi ifadeler kullanılıyor.
- **Pazar sayfaları tarafsız.** Ülke sayfaları bir satış metni değil, pazarın dışarıdan bir anlatımı. Orada proje sayısı ya da "biz buradayız" cümlesi yok.
- **Render ve fotoğraf ayrımı.** Proje galerilerinde görselin gerçek fotoğraf mı bilgisayar görseli mi olduğu belirtiliyor: "Photographs supplied by the developer." ya da "Computer-generated images supplied by the developer."

---

## 15. CMS: editörün göreceği alanlar

Bu bölüm, sitedeki her bölümün içerik yönetim sisteminde nasıl düzenleneceğini gösteriyor. Hangi CMS'in kullanılacağından bağımsız; yalnızca editörün hangi alanları göreceğini tarif ediyor.

### İlkeler

1. **Editör içeriği değiştirir, biçimi değiştirmez.** Yerleşim, renkler, tipografi, boşluklar ve bölüm içindeki düzen kilitli. Editörün eline yalnızca metin, görsel, link ve liste maddeleri geçer.
2. **Bölümlerin sırası sabittir.** Pazarlama sayfalarında editör bölüm ekleyip silemez, yerlerini değiştiremez; bölüm sırası bir tasarım kararı. Her bölüm CMS'te sitedeki adıyla, sitedeki sırayla görünür.
3. **Her metin parçası ayrı bir alandır.** Bir bölümün başlığı, açıklaması ve buton metni ayrı alanlarda tutulur; tek bir serbest "Body" alanına yazılmaz.
4. **Zengin metin yalnızca düzyazı olan yerlerde.** Blog gövdesi ve sayfalardaki uzun okuma bölümleri. Orada da araç çubuğu kısıtlı: paragraf, ara başlık, kalın, italik, link, liste, alıntı, tablo. Yazı tipi, boyut, renk ve hizalama seçenekleri olmaz.
5. **Tekrar eden içerikler listedir.** Adımlar, sorular, bölgeler, maliyet kalemleri gibi. Editör madde ekleyip çıkarabilir ve sıralayabilir, ama parantez içindeki sınırlar içinde. Sınırlar tasarımın taşıyabildiği madde sayısını gösteriyor.

### İki genel kural

- **Dil:** Metin alanları her dil için ayrı tutulur. Görsel, link, sayı, tarih ve seçim alanları dilden bağımsızdır. Görsellerin alt metni ise çevrilir.
- **Hesaplanan içerik alan değildir.** Aşağıdaki şeyler içerikten otomatik üretilir ve editöre hiç gösterilmez: "Homes from" fiyatı, "36 of 63" gibi müsait/toplam sayıları, yatak odası özetleri, doluluk şeridi, proje listesindeki filtreler ve sayıları, okuma süresi, makalelerdeki "In this article" listesi, sayfa içi menüler, "Keep reading" listeleri. Editörün bir rakamı elle yazması, sitenin söylediği ile gerçeğin ayrışmasına yol açar.

Fotoğrafların üzerindeki küçük veri panelleri ve "Illustrative interface." ekranları tasarımın parçasıdır, CMS'te alan olarak yer almaz.

### Alan türleri

- **tek satır** — başlık, etiket, kısa değer
- **çok satırlı düz metin** — açıklama, paragraf; araç çubuğu yok
- **kısıtlı zengin metin** — yalnızca blog gövdesi ve uzun okumalar
- **görsel + alt metin**
- **link** — metni ayrıca tek satır alan olarak tutulur
- **sayı** — fiyat, alan, mesafe
- **tarih**
- **seçim listesi** — önceden tanımlı değerlerden biri ya da birkaçı
- **liste** — tekrar eden madde grubu, parantez içinde madde sınırıyla

---

### Ortak içerik

Bu içerikler tek bir yerden düzenlenir ve sitenin her yerinde güncellenir.

**İletişim bilgileri**
- Ofis adı: tek satır
- Adres: çok satırlı düz metin
- Telefon: tek satır
- E-posta: tek satır

**Header**
- Menü öğeleri: liste (8 madde)
  - Etiket: tek satır
  - Link: link
- Ticari aksiyon: tek satır + link ("Submit Your Project")
- Diller: seçim listesi

**Footer**
- Kısa tanım: tek satır
- Link grupları: liste (4 grup)
  - Grup başlığı: tek satır
  - Linkler: liste (2–6 madde): etiket + link
- Yasal linkler: liste (2–5 madde): etiket + link

---

### Ortak bölümler

Birden fazla sayfada kullanılan bölümler. Bir kez düzenlenirler; sayfa listelerinde yalnızca adları geçer.

**Dağıtım ekosistemi** (ana sayfa, Developers, Platform)
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Diyagram düğümleri: liste (5 madde)
  - Rol: tek satır ("Supply", "Platform" gibi)
  - Ad: tek satır
  - Detay: tek satır

**Submit Your Project bandı** (ana sayfa, Developers, Platform)
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Buton metni: tek satır
- Telefon satırı giriş metni: tek satır ("Prefer to talk first?")
- Görsel: görsel + alt metin

**Proje sorma bandı** (Projects listesi ve proje detayları)
- Başlık: tek satır
- Proje sayfasındaki başlık: tek satır (proje adı otomatik eklenir)
- Açıklama: çok satırlı düz metin
- Geliştirici satırı: tek satır

**Pazar sorma bandı** (Markets listesi ve ülke sayfaları)
- Başlık: tek satır
- Ülke sayfasındaki başlık: tek satır (ülke adı otomatik eklenir)
- Açıklama: çok satırlı düz metin
- Ajans kapısı başlığı: tek satır
- Ajans kapısı metni: çok satırlı düz metin
- Ajans kapısı link metni: tek satır

**Blog kapanış bandı** (Insights listesi ve makaleler)
- Başlık: tek satır
- Açıklama: çok satırlı düz metin

---

### Ana sayfa

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link
- Arka plan görseli: görsel + alt metin

**How it works**
- Başlık: tek satır
- Aşamalar: liste (4 madde; yerleşim geniş–dar dönüşümlü olduğu için sayı sabit)
  - Aşama adı: tek satır
  - Açıklama: çok satırlı düz metin
  - Görsel: görsel + alt metin

**Dağıtım ekosistemi** — ortak bölüm

**Markets**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Satırlar Markets koleksiyonundan otomatik gelir; yerel saat otomatik hesaplanır.

**Featured projects**
- Başlık: tek satır
- Gösterilecek projeler: seçim listesi (Projects koleksiyonundan, 4 proje)

**Partners**
- Başlık: liste (3 satır; her satır ayrı bir tek satır alan)
- Açıklama: çok satırlı düz metin
- Görsel: görsel + alt metin
- Faydalar: liste (3–5 madde): tek satır
- Buton: tek satır + link

**Developer FAQ**
- Başlık: tek satır
- Sorular: liste (4–8 madde)
  - Soru: tek satır
  - Cevap: çok satırlı düz metin
  - Link: tek satır + link
- Telefon satırı giriş metni: tek satır

**Submit Your Project bandı** — ortak bölüm

---

### Developers

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link
- Görsel: görsel + alt metin

**Agency comparison**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Sol kolon başlığı: tek satır
- Sağ kolon başlığı: tek satır
- Satırlar: liste (5–8 madde)
  - Konu: tek satır
  - Sol kolon metni: çok satırlı düz metin
  - Sağ kolon metni: çok satırlı düz metin

**Scope of work**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- "Stays with you" başlığı: tek satır
- "Stays with you" maddeleri: liste (2–5 madde): tek satır
- Aşamalar: liste (4 madde)
  - Aşama adı: tek satır
  - Özet: çok satırlı düz metin
  - Teslimler: liste (3–6 madde): tek satır

**Dağıtım ekosistemi** — ortak bölüm

**Uzun okuma** ("A listing is not a sales strategy.")
- Başlık: tek satır
- Spot: çok satırlı düz metin
- Gövde: kısıtlı zengin metin

**Sales reporting**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Rapor kapsamı: liste (3–6 madde): tek satır
- Görsel: görsel + alt metin

**Engagement process**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Adımlar: liste (4–6 madde)
  - Adım adı: tek satır
  - Metin: çok satırlı düz metin
- "Helpful to have ready" başlığı: tek satır
- "Helpful to have ready" açıklaması: çok satırlı düz metin
- Hazırlık maddeleri: liste (4–10 madde): tek satır

**Projects in network**
- Başlık: tek satır
- Projeler Projects koleksiyonundan otomatik gelir.

**Submit Your Project bandı** — ortak bölüm

---

### Partners

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link
- Görsel: görsel + alt metin

**Partner toolkit**
- Başlık: tek satır
- Maddeler: liste (4 madde; her maddenin yanındaki küçük arayüz tasarımın parçasıdır)
  - Başlık: tek satır
  - Metin: çok satırlı düz metin

**Lead registration**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Adımlar: liste (4 madde)
  - Adım adı: tek satır
  - Metin: çok satırlı düz metin

**Uzun okuma** ("An agency's real inventory is its clients.")
- Başlık: tek satır
- Spot: çok satırlı düz metin
- Bloklar: liste
  - Tür: seçim listesi (giriş paragrafı / paragraf / ara başlık / alıntı / kapanış paragrafı)
  - Metin: çok satırlı düz metin
  - Kenar notu (isteğe bağlı): terim tek satır + metin tek satır

**On the ground**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Görsel: görsel + alt metin
- Destek maddeleri: liste (3 madde)
  - Başlık: tek satır
  - Metin: çok satırlı düz metin

**Network rules**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Kurallar: liste (3 madde)
  - Başlık: tek satır
  - Metin: çok satırlı düz metin

**Partner application**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Form: seçim listesi (Partner başvuru formu)
- Onay mesajı başlığı: tek satır
- Onay mesajı metni: çok satırlı düz metin

---

### Invest

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link
- Görsel: görsel + alt metin

**Buyer reasons**
- Başlık: tek satır
- Görsel: görsel + alt metin
- Nedenler: liste (3–6 madde; her nedenin paneli tasarımın parçasıdır)
  - Başlık: tek satır
  - Metin: çok satırlı düz metin

**Current projects**
- Başlık: tek satır
- Projeler Projects koleksiyonundan otomatik gelir.

**Uzun okuma** ("When you buy new abroad, you are buying a promise.")
- Başlık: tek satır
- Spot: çok satırlı düz metin
- Gövde: kısıtlı zengin metin
- Ara görsel: görsel + alt metin

**Buyer checklist**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Sorular: liste (6–10 madde)
  - Soru: tek satır
  - İpucu: tek satır
- Uyarı notu: tek satır

**Adviser choice**
- Başlık: tek satır
- Birinci kapı: başlık tek satır + metin çok satırlı düz metin + buton tek satır + link
- İkinci kapı: başlık tek satır + metin çok satırlı düz metin + link tek satır + link
- Yasal not: çok satırlı düz metin

---

### Company

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- "On this page" listesi sayfanın bölümlerinden otomatik oluşur.

**About TEKCE Exclusive**
- Başlık: tek satır
- Metin: çok satırlı düz metin
- Künye: liste (3–6 madde)
  - Etiket: tek satır
  - Değer: tek satır
- Görsel: görsel + alt metin

**TEKCE Group**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Şirketler: liste (2–6 madde)
  - Alan: tek satır
  - Şirket adı: tek satır
  - Açıklama: tek satır
- Alt not: çok satırlı düz metin

**How we got here**
- Başlık: tek satır
- Kilometre taşları: liste (4–8 madde)
  - Yıl ya da işaret: tek satır ("2018", "Then", "Today")
  - Başlık: tek satır
  - Metin: çok satırlı düz metin
  - Vurgulu: seçim listesi (evet / hayır; yalnızca TEKCE Exclusive'in kuruluşu vurgulu)

**Uzun okuma** ("Why TEKCE Exclusive exists.")
- Başlık: tek satır
- Giriş: çok satırlı düz metin
- Bölümler: liste (2–6 madde)
  - Bölüm başlığı: tek satır
  - Gövde: kısıtlı zengin metin
  - Kapanış cümlesi (isteğe bağlı): tek satır

**Business model**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Taraflar: liste (4 madde)
  - Rol: tek satır
  - Taraf adı: tek satır
  - Not (isteğe bağlı): tek satır
  - Getirdikleri: liste (1–5 madde): tek satır
  - Aldıkları: liste (1–5 madde): tek satır

**Global network**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Harita ve ofis listesi Ofisler koleksiyonundan otomatik oluşur.

**Values**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Değerler: liste (5 madde)
  - Değer: tek satır
  - Motto: tek satır

**Contact**
- Başlık: tek satır
- Adres, telefon ve e-posta ortak iletişim bilgilerinden gelir.
- Yönlendirmeler: liste (3–4 madde)
  - Başlık: tek satır
  - Metin: tek satır
  - Link: link

---

### Platform

**Hero**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link
- Görsel: görsel + alt metin

Sayfa içi menü bölüm başlıklarından otomatik oluşur.

**How it works**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Yüzeyler: liste (3 madde)
  - Kitle: tek satır
  - Yüzey adı: tek satır
  - Açıklama: tek satır
- "Sales & CRM" açıklaması: tek satır
- "Project data" açıklaması: tek satır

**Dağıtım ekosistemi** — ortak bölüm

**TeleProperty**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Görsel: görsel + alt metin
- Adımlar: liste (4–6 madde)
  - Adım adı: tek satır
  - Metin: tek satır

**Uzun okuma** ("Software doesn't sell property. It helps people sell it better.")
- Başlık: tek satır
- Spot: çok satırlı düz metin
- Gövde: kısıtlı zengin metin

**Sales & CRM**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Notlar: liste (6 madde; kayıt üzerindeki numaralarla eşleşir)
  - Başlık: tek satır
  - Metin: tek satır

**Developer dashboard**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Görsel: görsel + alt metin
- Yetenekler: liste (4 madde)
  - Başlık: tek satır
  - Metin: tek satır

**Partner platform**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Özellikler: liste (3–5 madde): tek satır
- Birinci buton: tek satır + link
- İkinci buton: tek satır + link

**Submit Your Project bandı** — ortak bölüm

---

### Projects

**Liste sayfası**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Filtreler, sıralama ve sonuç sayıları koleksiyondan otomatik oluşur.
- Proje sorma bandı — ortak bölüm

**Proje şablonu** (`/projects/proje-adi`)

Her proje bir koleksiyon kaydıdır; sayfası şablondan otomatik oluşur. Editörün doldurduğu alanlar:

- Proje adı: tek satır
- Referans numarası: tek satır
- Konum: tek satır
- Ülke: seçim listesi (Markets koleksiyonundan)
- Konut tipleri: seçim listesi, birden fazla seçilebilir (Apartment / Penthouse / Villa)
- İnşaat aşaması (isteğe bağlı): seçim listesi
- Kart görseli: görsel + alt metin
- Özet: tek satır
- Galeri türü: seçim listesi (Photographs / Computer-generated images)
- Galeri: liste (4–8 görsel): görsel + alt metin
- Açıklama: çok satırlı düz metin
- Künye: liste (3–8 madde)
  - Etiket: tek satır
  - Değer: tek satır
- Donanım grupları (isteğe bağlı): liste (1–3 grup)
  - Grup başlığı: tek satır
  - Maddeler: liste (2–15 madde): tek satır
- Konum metni: çok satırlı düz metin
- Mesafeler: liste (3–9 madde)
  - Yer: tek satır
  - Mesafe (km): sayı
- Unitler: liste
  - Unit numarası: tek satır
  - Kat: tek satır
  - Yatak odası: sayı
  - Banyo: sayı
  - İç alan (m²): sayı
  - Toplam alan (m²): sayı
  - Fiyat (€): sayı
  - Durum: seçim listesi (Available / Sold)

Unit listesi uzun olabilir; tek tek girmek yerine bir tablodan içe aktarılabilmesi editörün işini ciddi biçimde kolaylaştırır. Unitlerde boş bırakılan sütunlar (örneğin hiçbir unitte banyo bilgisi yoksa) sayfada hiç çizilmez.

Şablon metinleri tüm proje sayfalarında ortaktır ve bir kez düzenlenir: bölüm başlıkları ("The project.", "What is left.", "Where it is.", "The rest of the list."), paneldeki fiyat notu, galeri künyesinin kalıbı ve buton metinleri.

---

### Markets

**Liste sayfası**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- Ülke satırları Markets koleksiyonundan otomatik gelir.
- Karşılaştırma bölümü:
  - Başlık: tek satır
  - Açıklama: çok satırlı düz metin
  - Tablo satırları koleksiyondan otomatik oluşur.
  - Kaynak ve uyarı notu: çok satırlı düz metin
- Pazar sorma bandı — ortak bölüm

**Ülke şablonu** (`/markets/ulke`)

Her ülke bir koleksiyon kaydıdır; sayfası şablondan otomatik oluşur. Editörün doldurduğu alanlar:

- Ülke adı: tek satır
- Saat dilimi: seçim listesi (ana sayfadaki yerel saat için)
- Ana sayfa bant görseli: görsel + alt metin
- Pazar görseli: görsel + alt metin
- Liste özeti: çok satırlı düz metin
- Giriş metni: çok satırlı düz metin
- Künye:
  - Alımın yoğunlaştığı yerler: tek satır
  - Mülkiyet: tek satır
  - Tescil yeri: tek satır
  - Alıcının alması gereken belge: tek satır
  - Tapu süresi: tek satır
- Pazar arka planı: liste (2–4 paragraf): çok satırlı düz metin
- Pazarı belirleyenler: liste (3 madde)
  - Başlık: tek satır
  - Metin: çok satırlı düz metin
- Bölgeler: liste (4–6 madde)
  - Bölge adı: tek satır
  - Metin: çok satırlı düz metin
- Satın alma adımları: liste (4–6 madde): tek satır
- Mülkiyet kuralları: liste (3–5 madde): çok satırlı düz metin
- Maliyet başlığı: tek satır ("Around 9% to 14% on top of the price" gibi)
- Maliyet kalemleri: liste (4–8 madde)
  - Kalem: tek satır
  - Oran: tek satır
  - Ödeyen: seçim listesi (Buyer / Seller / Both / Owner)
- Maliyet notu (isteğe bağlı): çok satırlı düz metin
- Kredi bilgisi: çok satırlı düz metin
- Sorular: liste (3–6 madde)
  - Soru: tek satır
  - Cevap: çok satırlı düz metin

Şablon metinleri tüm ülke sayfalarında ortaktır ve bir kez düzenlenir: bölüm başlıkları ("What shapes the market.", "Where buying concentrates.", "How a purchase runs.", "What you can own.", "What it costs on top.", "Questions buyers ask."), bölüm giriş cümleleri ve maliyet bölümünün uyarı notu.

---

### Insights

**Liste sayfası**
- Başlık: tek satır
- Açıklama: çok satırlı düz metin
- En yeni yazı otomatik olarak büyük gösterilir, diğerleri altında sıralanır.
- Blog kapanış bandı — ortak bölüm

**Makale şablonu** (`/blog/yazi-adi`)

Her makale bir koleksiyon kaydıdır. Editörün doldurduğu alanlar:

- Başlık: tek satır
- Spot: çok satırlı düz metin
- Konu: seçim listesi ("Buying guide", "Markets · Spain", "For developers & partners" gibi)
- Yayın tarihi: tarih
- Kapak görseli: görsel + alt metin
- Görsel künyesi: tek satır
- Yan kolon linki: tek satır + link (ilgili pazar ya da sayfa)
- Gövde: kısıtlı zengin metin (paragraf, ara başlık, alıntı, liste, tablo, not)
- Kaynaklar: liste (1–8 madde)
  - Kaynak adı: tek satır
  - Link: link

Okuma süresi, "In this article" listesi ve "Keep reading" listesi otomatik oluşur. Şablon metinleri ("All articles", "In this article", "Questions this did not answer?", "Keep reading.", "Sources") bir kez düzenlenir.

---

### Ofisler

Company sayfasındaki harita ve ofis listesi bu koleksiyondan beslenir.

- Ülke: tek satır
- Emlak pazarı mı: seçim listesi (Property market / Office only)
- Şehirler: liste
  - Şehir: tek satır
  - Semtler (isteğe bağlı): liste: tek satır
  - Konum: sayı (enlem) + sayı (boylam)
