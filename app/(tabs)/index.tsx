import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default function HomeScreen() {
  // Data produk supaya kodingan lebih rapi
  const products = [
    { id: 1, name: 'Gaming Headset', price: 'Rp 450.000', emoji: '🎧', discount: true },
    { id: 2, name: 'RGB Mouse', price: 'Rp 210.000', emoji: '🖱️', discount: false },
    { id: 3, name: 'Mechanical KB', price: 'Rp 850.000', emoji: '⌨️', discount: false },
    { id: 4, name: 'Curve Monitor', price: 'Rp 2.100.000', emoji: '🖥️', discount: false },
    { id: 5, name: 'Gaming Chair', price: 'Rp 1.500.000', emoji: '💺', discount: false },
    { id: 6, name: 'Graphic Card', price: 'Rp 4.200.000', emoji: '📟', discount: true },
    { id: 7, name: 'Webcam HD', price: 'Rp 350.000', emoji: '📷', discount: false },
    { id: 8, name: 'USB Hub Type-C', price: 'Rp 150.000', emoji: '🔌', discount: false },
  ];

  // Helper untuk membagi array produk menjadi pasangan (2 kolom)
  const rows = [];
  for (let i = 0; i < products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      {/* BACKGROUND DECOR */}
      <View style={[styles.glowBlob, { top: '-5%', left: '-15%', backgroundColor: '#0ea5e940' }]} />
      <View style={[styles.glowBlob, { bottom: '-10%', right: '-20%', backgroundColor: '#22d3ee20' }]} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>TechGears Store</Text>
          <View style={styles.headerUnderline} />
        </View>

        {/* PRODUCT GRID - LOOPING 8 PRODUK */}
        {rows.map((row, index) => (
          <View key={index} style={styles.productRow}>
            {row.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Text style={styles.productEmoji}>{item.emoji}</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                
                {/* ABSOLUTE POSITIONING: Badge OFF muncul jika discount true */}
                {item.discount && (
                  <View style={styles.saleBadge}>
                    <Text style={styles.saleText}>OFF</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <Text style={styles.unpriText}>Universitas Prima Indonesia</Text>
          <Text style={styles.nimText}>Samuel R. Mendrofa - 243303621285</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  glowBlob: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: 175,
    opacity: 0.2,
  },
  scrollContent: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#f8fafc',
    letterSpacing: 1,
  },
  headerUnderline: {
    width: 60,
    height: 4,
    backgroundColor: '#0ea5e9',
    marginTop: 8,
    borderRadius: 2,
  },
  productRow: {
    flexDirection: 'row', // Mandatory Flexbox Row
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  productCard: {
    backgroundColor: '#0f172a',
    width: '48%', // Menjaga 2 kolom agar responsif
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1e293b',
    alignItems: 'center',
    position: 'relative', // Penting untuk Absolute Position
    elevation: 5,
  },
  productEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  productName: {
    color: '#f1f5f9',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    color: '#22d3ee',
    fontSize: 12,
    marginTop: 5,
  },
  saleBadge: {
    position: 'absolute', // Mandatory Absolute Position
    top: 0,
    right: 0,
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 15,
  },
  saleText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },
  footerContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  unpriText: {
    color: '#475569',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  nimText: {
    color: '#1e293b',
    fontSize: 10,
    marginTop: 5,
  },
});