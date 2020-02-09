// 把所有与文章分类相关的操作写在这里

let category = {
    // 获取
    get() {
        return $.get(APILIST.category_get)
    },
    // 添加文章类型
    add(name, slug) {
        return $.post(APILIST.category_add, { name, slug })
    },
    // 删除文章类型
    del(id) {
        return $.post(APILIST.category_del, { id })
    },
    // 编辑文章类型
    edit(id, name, slug) {
        return $.post(APILIST.category_edit, { id, name, slug })
    }
}