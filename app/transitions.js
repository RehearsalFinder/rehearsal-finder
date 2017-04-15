export default function () {
  // Index
  this.transition(
    this.fromRoute('index'),
    this.toRoute('rehearsalspaces'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // List
  this.transition(
    this.fromRoute('rehearsalspaces.index'),
    this.toRoute('rehearsalspaces.detail'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
