// 0開頭，3到4位
/0\d{2,3}/

// 非 0 開頭，7到8位
/[1-9]\d{6,7}/

// match 055188888888
/^0\d{2,3}[1-9]\d{6,7}$/

// match 0551-88888888
/^0\d{2,3}-[1-9]\d{6,7}$/

// (0551)88888888
/^\(0\d{2,3}\)[1-9]\d{6,7}$/