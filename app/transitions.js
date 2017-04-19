export default function () {
  // Index
  this.transition(
    this.fromRoute('index'),
    this.toRoute('rehearsalspaces'),
    this.use('toFixL'),
    this.reverse('toFixR')
  );

  // List
  this.transition(
    this.fromRoute('rehearsalspaces.index'),
    this.toRoute('rehearsalspaces.detail'),
    this.use('toFixL'),
    this.reverse('toFixR')
  );

  // User Dashboard
  this.transition(
    // this.fromRoute(''),
    this.toRoute('user-dashboard'),
    this.use('toFixUp'),
    this.reverse('toFixDown')
  );
}
