// 필요한 모듈과 스타일 파일을 import한다.
import './App.css'

// 실제로 사용될 화면을 그립니다.
function App() {
  // 화면이 렌더링 되기 위해 필요로 하는 값(data)를 적습니다.
  // return () 바깥에서는 일반 자바스크립트처럼 // 로 주석을 적습니다
  const account = {
    status: '정상',
    accountNo: 1002,
    bankName: '우리WON뱅킹',
    accountNumber: '1002-345-678901',
    balance: 1523000,
  }
  //
  // // 카드에 사용할 스타일을 객체로 정의합니다.
  // const styles = {
  //   wrapper: {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flexGrow: 1,
  //     padding: '40px 20px',
  //   },
  //   card: {
  //     width: '360px',
  //     maxWidth: '100%',
  //     textAlign: 'left',
  //     padding: '24px',
  //     borderRadius: '16px',
  //     border: '1px solid var(--border)',
  //     background: 'var(--bg)',
  //     boxShadow: 'var(--shadow)',
  //     boxSizing: 'border-box',
  //   },
  //   header: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     marginBottom: '20px',
  //   },
  //   bankName: {
  //     margin: 0,
  //     fontSize: '20px',
  //     fontWeight: 600,
  //     color: 'var(--text-h)',
  //   },
  //   badge: {
  //     fontSize: '13px',
  //     padding: '4px 10px',
  //     borderRadius: '999px',
  //     color: 'var(--accent)',
  //     background: 'var(--accent-bg)',
  //     border: '1px solid var(--accent-border)',
  //   },
  //   label: {
  //     fontSize: '14px',
  //     color: 'var(--text)',
  //     marginBottom: '4px',
  //   },
  //   accountNumber: {
  //     fontFamily: 'var(--mono)',
  //     fontSize: '17px',
  //     color: 'var(--text-h)',
  //     marginBottom: '20px',
  //   },
  //   balance: {
  //     fontSize: '28px',
  //     fontWeight: 600,
  //     letterSpacing: '-0.5px',
  //     color: 'var(--text-h)',
  //   },
  // }
  //
  // // return 뒤에 렌더링 될 부분을 적습니다.
  // return (
  //   <div style={styles.wrapper}>
  //     <div style={styles.card}>
  //       <div style={styles.header}>
  //         <h2 style={styles.bankName}>{account.bankName}</h2>
  //         <span style={styles.badge}>{account.status}</span>
  //       </div>
  //
  //       <p style={styles.label}>계좌번호</p>
  //       <p style={styles.accountNumber}>{account.accountNumber}</p>
  //
  //       <p style={styles.label}>잔액</p>
  //       <p style={styles.balance}>{account.balance.toLocaleString()}원</p>
  //     </div>
  //   </div>
  // )


  return (
    <>
      <p className={"header"}>- 상태: 정상</p>
      <p>-은행명: {account.bankName}</p>
      <p>-계좌번호: {account.accountNo}</p>
      <p>-잔액: {account.balance}</p>
      <p>-계좌상태: {account.status}</p>
    </>
  )
}

export default App
