const BASE_COLOR = 'FFE7CC';
const DARK_BASE_COLOR = '202020';
const PRIMARY_COLOR1 = 'FFE7CC';
const PRIMARY_COLOR2 = 'FFCA8E';
// const PRIMARY_COLOR0 = 'FFB461';
// const PRIMARY_COLOR3 = 'E79438';
const PRIMARY_COLOR4 = '925715';

module.exports = {
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Futura',
  },
  tagline: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginContainer: {
    marginTop: 20,
  },
  loginButton: {
    width: 200,
    height: 50,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  tabBar: {
  },
  challenges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: BASE_COLOR,
  },
  challenge: {
    backgroundColor: DARK_BASE_COLOR,
    padding: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  challengeName: {
    color: PRIMARY_COLOR1,
    fontFamily: 'Futura',
    fontSize: 18,
  },
  challengeFineBox: {
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY_COLOR4,
    padding: 8,
    paddingTop: 4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  challengeFine: {
    color: PRIMARY_COLOR1,
    fontFamily: 'Futura',
    fontSize: 15,
  },
  memberName: {
    color: PRIMARY_COLOR2,
    fontFamily: 'Futura',
    fontSize: 15,
  },
};
