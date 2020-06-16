// translate router.meta.title, be used in breadcrumb sidebar tagsview
// $te这个方法用以判断需要翻译的key在你提供的语言包(messages)中是否存在.
export function generateTitle (title) {
  const hasKey = this.$te(title)
  const translatedTitle = this.$t(title) // $t :this method from vue-i18n, inject in @/lang/index.js
  if (hasKey) {
    return translatedTitle
  }
  return title
}
