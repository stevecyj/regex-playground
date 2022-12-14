// 使用具體字串代替萬用字元
/'.*'/

/'[^']*'/

// 不需分組引用、反向引用時，使用非捕獲型分組(?:)
/^[-]?(\d\.\d+|\d+|\.\d+)$/

/^[-]?(?:\d\.\d+|\d+|\.\d+)$/

// 獨立出確定的字串
// 1個或多個 a
/a+/
/aa*/

// 取出公同的分支(|)
/^abc|^def/

/^(?:abc|def)/

// 

/this|that/

/th(?:is|at)/

// 減少 or 的數量，縮小它們的範圍
/red|read/

// 0 或 1 個
/rea?d/