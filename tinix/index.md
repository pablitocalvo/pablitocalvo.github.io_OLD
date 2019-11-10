spiana la pennetta

   parted /dev/sdb -s mklabel msdos

crea la partizione per ospitare tinix 


  parted /dev/sdb -s mkpart primary fat32 1MiB 3000MiB



formatta la partizione con fat32

  mkfs.fat -n "DEBIAN_LIVE" -F 32 /dev/sdb1



copia i file di tinix nella partizione..

  mkdir pendest
  mount /dev/sdb1 pendest
  
  mkdir pensource
  mount /dev/sda1 pensource
  
  cp -R pensource/* pendest/
  sync
  

installa il boot-manager syslinux....

  syslinux -i /dev/sdb1
  
  dd conv=notrunc bs=440 count=1 if=mbr.bin of=/dev/sdb
  parted /dev/sdb set 1 boot on


	
